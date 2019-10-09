# PostCSS Pseudo Elements Content

[![Build Status][ci-img]][ci] [![npm](https://img.shields.io/npm/v/postcss-pseudo-elements-content.svg?color=%2356C838)](https://www.npmjs.com/package/postcss-pseudo-elements-content)

[PostCSS] plugin adds `content: ''` to `:before` and `:after` pseudo-elements.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/omgovich/postcss-pseudo-elements-content.svg
[ci]:      https://travis-ci.org/omgovich/postcss-pseudo-elements-content

```css
.foo:before-c {
  display: block;
  width: 10px;
  height: 10px;
}
.bar .baz:after-c {
}
```

```css
.foo:before {
  display: block;
  width: 10px;
  height: 10px;
  content: '';
}
.bar .baz:after {
  content: '';
}
```

## Usage

```js
postcss([ require('postcss-pseudo-elements-content') ])
```

See [PostCSS] docs for examples for your environment.
