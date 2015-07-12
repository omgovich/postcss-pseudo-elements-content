# PostCSS Pseudo Elements Content [![Build Status][ci-img]][ci]

[PostCSS] plugin to automatically add "content" property in the pseudo-elements (:before and :after).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/omgovich/postcss-pseudo-elements-content.svg
[ci]:      https://travis-ci.org/omgovich/postcss-pseudo-elements-content

Convert custom pseudo-elements `before-c`/`after-c` into `before`/`after` and add `content: ''` decl.

Before:

```css
.block:before-c {
    display: block;
    width: 10px;
    height: 10px;
    background: yellow;
}
.chained .block:after-c {
}
```

After:

```css
.block:before {
    display: block;
    width: 10px;
    height: 10px;
    background: yellow;
    content: '';
}
.chained .block:after {
    content: '';
}
```

## Usage

```js
postcss([ require('postcss-pseudo-elements-content') ])
```

See [PostCSS] docs for examples for your environment.
