"use strict"
/* jshint strict: true, esversion : 6 */

var jshash = require('jshash');


var cache = { }

module.exports = function (exec, execmap) {
  const filters = {};

  /**
   * Compute float footprint
   */
  filters.floatprint = function (input, args) {
    return exec(args, function (arg) {
      let alphabet = 'abcdefgijklmnopqrstuvwxyz1234567890'
      if (typeof arg === 'string') {
        alphabet = arg
      }
      function charsum(c) {
        const x = alphabet.indexOf(c) + 1
        return x === 0 ? 0 : x / alphabet.length
      }

      let r = 0;
      for(var i = 0; i < input.length; i++) {
        const p = charsum(input[i]) * 1 / (i + 1);
        r += Math.pow(p, 2);
      }
      return r;
    }, "floatprint");
  };

  /**
   * Naive hashing where the Unicode char are summed.
   */
  filters.loselose = function (input, args, next) {
    return exec(args, () => next(null, jshash.loselose(input)), "loselose");
  };

 /**
  * Pearson 8-bit hash function.
  */
 filters.pearson = function (input, args, next) {
   return exec(args, () => next(null, jshash.pearson(input)), "djb2");
 };

 /**
  * Bernstein's djb2 hash function.
  */
 filters.djb2 = function (input, args, next) {
   return exec(args, () => next(null, jshash.djb2(input)), "djb2");
 };

 /**
  * Hash function used in sdbm.
  */
 filters.sdbm = function (input, args, next) {
   return exec(args, () => next(null, jshash.sdbm(input)), "sdbm");
 };

 /**
  * Fowler–Noll–Vo hash function variant 1a.
  */
 filters.fnv1a = function (input, args, next) {
   return exec(args, () => next(null, jshash.fnv1a(input)), "fnv1a");
 };


/**
 * Murmur hash function version 3
 */
 filters.murmur3 = function (input, args, next) {
   return exec(args, () => next(null, jshash.murmur3(input)), "murmur3");
 };

 /**
  * distinct counter (use cache)
  */
 filters.distincter = function (input, args) {
   return exec(args, function (arg) {
     let key = arg
     if (typeof arg !== 'string') {
       key = "default"
     }
     if (cache[key] === undefined) {
       cache[key] = []
     }
     const id = jshash.djb2(input);
     let ix = cache[key].indexOf(id);
     if (ix === -1) {
       cache[key].push(id);
       ix = cache[key].length - 1;
     }
     return ix + 1;
   }, "distincter");
 };

 /**
  * reset cache (use cache)
  */
 filters.reseter = function (input, args) {
   return exec(args, function (arg) {
     let key =  arg
     if (typeof arg !== 'string') {
       key = "default"
     }
     cache[key] = []
     return input;
   }, "reseter");
 };


 return filters;
}







