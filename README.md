# Numerical text processing for JBJ

Add filters to [JBJ](https://github.com/castorjs/node-jbj).

# Installation

With [npm](http://npmjs.org) do:

    $ npm install jbj-numerical

# Documentation

## Usage

```javascript
var JBJ = require('jbj');

JBJ.use(require('jbj-numerical'));
```

## Filters

<a id="floatprint"></a>
### floatprint: alphabet
Compute float footprint

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "floatprint": "abcdefgijklmnopqrstuvwxyz1234567890"
};
JBJ.render(stylesheet, console.log);
// 0.18240444179977044

```



<a id="loselose"></a>
### loselose : true
Naive hashing where the Unicode char are summed.

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "loselose": true
};
JBJ.render(stylesheet, console.log);
// 0.0948003043098926

```


<a id="pearson"></a>
### pearson: true
Pearson 8-bit hash function.

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "pearson": true
};
JBJ.render(stylesheet, console.log);
// 142

```


<a id="djb2"></a>
### djb2 : true
Bernstein's djb2 hash function.

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "djb2": true
};
JBJ.render(stylesheet, console.log);
// 1523634734

```


<a id="sdbm"></a>
### sdbm : true
Hash function used in sdbm.

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "sdbm": true
};
JBJ.render(stylesheet, console.log);
// 76755323

```


<a id="fnv1a"></a>
### fnv1a: true
Fowler–Noll–Vo hash function variant 1a.

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "fnv1a": true
};
JBJ.render(stylesheet, console.log);
// 1505692836

```



<a id="murmur3"></a>
### murmur3: true
Murmur hash function version 3

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "murmur3": true
};
JBJ.render(stylesheet, console.log);
// 1796952176

```


<a id="distincter"></a>
### distincter: true
distinct counter (use cache)

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "distincter": true
};
JBJ.render(stylesheet, console.log);
// 1

```


<a id="reseter"></a>
### reseter: true
reset cache (use cache)

```javascript

var stylesheet = {
  "set": "lorem ipsum",
  "reseter": true
};
JBJ.render(stylesheet, console.log);
// lorem ipsum

```


