var assert = require('assert'),
    parser = require('../lib/parser').parser,
    nodes = require('../lib/nodes')

describe('Parser', function() {
  it('parse tag', function () {
    assert.deepEqual(parser.parse("html 'hi'"),
        new nodes.Template([
          new nodes.Tag('html', [
            new nodes.Text('hi')
          ])
        ])
      )
  })

  it('parse nested tags', function () {
    assert.deepEqual(parser.parse("html { p {} }"),
        new nodes.Template([
          new nodes.Tag('html', [
            new nodes.Tag('p', [])
          ])
        ])
      )
  })
})