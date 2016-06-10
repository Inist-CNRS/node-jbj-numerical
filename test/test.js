/*jshint node:true, laxcomma:true */
/* global describe, it */
'use strict';
var assert = require('assert');
var JBJ = require('jbj');

var examples = require('./examples.json');

JBJ.use(require('../src/'));

describe('Filters', function () {
  for (const name in examples) {
    let example = examples[name];

    it(name, function (done) {
      var input      = example.input;
      var stylesheet = example.stylesheet;
      var expected   = example.expected;
      JBJ.render(stylesheet, input, function (err, output) {
        assert.deepEqual(output, expected);
        done(err);
      });
    });
  }

});
