# PostCSS Pseudo Elements Content [![Build Status][ci-img]][ci]

[PostCSS] plugin to automatically add "content" property in the pseudo-elements (:before and :after).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/omgovich/postcss-pseudo-elements-content.svg
[ci]:      https://travis-ci.org/omgovich/postcss-pseudo-elements-content

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-pseudo-elements-content') ])
```

See [PostCSS] docs for examples for your environment.
