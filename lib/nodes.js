var Compiler = require('./compiler').Compiler

function Template(tags) {
  this.tags = tags
}
exports.Template = Template

Template.prototype.compile = function(compiler) {
  this.tags.forEach(compileAll(compiler))
}


function Tag(name, tags) {
  this.name = name
  this.tags = tags
}
exports.Tag = Tag

Tag.prototype.compile = function(compiler) {
  compiler.append("<" + this.name + ">")
  this.tags.forEach(compileAll(compiler))
  compiler.append("</" + this.name + ">")
}


function Text(content) {
  this.content = content
}
exports.Text = Text

Text.prototype.compile = function(compiler) {
  compiler.append(this.content)
}


function Expression(content) {
  this.content = content
}
exports.Expression = Expression

Expression.prototype.compile = function(compiler) {
  compiler.appendExpression(this.content)
}


function Statement(content) {
  this.content = content
}
exports.Statement = Statement

Statement.prototype.compile = function(compiler) {
  compiler.appendStatement(this.content)
}


function compileAll(compiler) {
  return function(object) { object.compile(compiler) }
}