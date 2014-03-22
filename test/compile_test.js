var assert = require('assert'),
    parser = require('../lib/parser').parser,
    Compiler = require('../lib/compiler').Compiler

describe('Compiler', function() {
  it('compile tag', function () {
    var compiler = new Compiler()
    parser.parse("html 'hi'").compile(compiler)
    assert.equal(compiler.toFunction()(),
                 "<html>hi</html>")
  })

  it('compile expression', function () {
    var compiler = new Compiler()
    parser.parse("html {{ name }}").compile(compiler)
    assert.equal(compiler.toFunction()({ name: 'marc' }),
                 "<html>marc</html>")
  })
  
  it('compile statement', function () {
    var compiler = new Compiler()
    parser.parse("html {\n" +
                   "{% for(var i=0; i < 3; i++) { %}\n" +
                   "{{ i }} ','\n" +
                   "{% } %}\n" + 
                 "}").compile(compiler)
    assert.equal(compiler.toFunction()(),
                 "<html>0,1,2,</html>")
  })
})