// The compiler emits bits of JavaScript code that will produce the HTML.
function Compiler() {
  this.code = [] // The chunks of JS code that will render the HTML.
}
exports.Compiler = Compiler

// Append `out` as a string
Compiler.prototype.append = function(out) {
  this.code.push("out.push('" + out + "')")
}

// Append `code` as a JavaScript expression
Compiler.prototype.appendExpression = function(code) {
  this.code.push("out.push(" + code + ")")
}

// Append `code` as a JavaScript statement. Do not output the returned value.
Compiler.prototype.appendStatement = function(code) {
  this.code.push(code)
}

// Returns the JS code for rendering the template
Compiler.prototype.toJS = function() {
  return "var out = []\n" +                // The output buffer
         "with(context || {}) {\n" +       // Forward unqualified names to context
           this.code.join("\n") + "\n" +
         "}\n" +
         "return out.join('')"
}

// Wrap the JS code in a function
Compiler.prototype.toFunction = function() {
  return new Function("context", this.toJS())
}