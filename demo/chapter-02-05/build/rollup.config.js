const path = require('path');
const buble = require('rollup-plugin-buble');
const babel = require('rollup-plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    ["env", {
      "modules": false
    }],
  ],
  "plugins": [
    "external-helpers",
    "transform-object-rest-spread",
    "transform-es2015-arrow-functions"
  ],
}

const plugins = [
  babel(babelOptions),
  buble(),
]

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'cjs',
    }, 
    external: ['lib/hello', 'lib/world'],
    plugins,
  },

  {
    input: resolveFile('src/lib/hello.js'),
    output: {
      file: resolveFile('dist/lib/hello.js'),
      format: 'cjs',
    }, 
    plugins,
  },

  {
    input: resolveFile('src/lib/world.js'),
    output: {
      file: resolveFile('dist/lib/world.js'),
      format: 'cjs',
    }, 
    plugins,
  },


]