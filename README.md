# Sample Template Engine

A project of [The Great Code Club](http://www.greatcodeclub.com/).

Simple template engine that can parse, compile and render to HTML.

## Syntax

Here's what it looks like.

    html {
      head {
        // {...} are optional if next to tag name
        title "My App"
      }
      body {
        h1 "My App"
        section {
          // Text nodes in quotes
          "This is cool"

          // Statements
          {% for(var i = 0; i < 3; i++) { %}

            // Expressions (output value)
            p {{ i }}

          {% } %}
        }
      }
    }

## Installation

You need:

- A recent version of [node](http://nodejs.org/).
- `make`. You probably have it already.

To install Node modules and compile the parser:

    $ npm install
    $ make

## Usage

To compile a template file to HTML:

    $ bin/compile samples/index.tmpl

Using the API:

    var engine = require('./lib/engine'),
        compiledTemplate = engine.compile('html {{ variable }}')
    
    // compiledTemplate is a function that will return the HTML
    console.log(compiledTemplate({ variable: 'woohoo!' }))
    // => <html>woohoo!</html>

## Running the tests

To run the tests:

    $ make test

Or to run the tests on file change:

    $ make watch

## License

Copyright 2014 Coded Inc.  
marc@codedinc.com

You are free to modify and distribute this however you want. Except for teaching purposes.
