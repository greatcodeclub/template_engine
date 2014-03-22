var parser = require('../lib/parser').parser,
    Compiler = require('../lib/compiler').Compiler

// Compile input to a function.
var compile = exports.compile = function(input) {
  var compiler = new Compiler()
  parser.parse(input).compile(compiler)

  return compiler.toFunction()
}

// Compile input and render it to HTML.
exports.render = function(input, context) {
  return compile(input)(context)
}