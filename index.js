var postcss = require('postcss')

var customPseudoExp = /(.*::?)(after|before)(-c)$/

module.exports = postcss.plugin('postcss-pseudo-elements-content', function () {
  return function (root) {
    root.walkRules(function (rule) {
      var hasCustomPseudo = false

      // Process selectors
      rule.selectors = rule.selectors.map(function (selector) {
        if (customPseudoExp.test(selector)) {
          hasCustomPseudo = true
          return selector.replace(customPseudoExp, '$1$2')
        }
        return selector
      })

      // Add `content: ''` declaraion
      if (hasCustomPseudo) rule.append({ prop: 'content', value: "''" })
    })
  }
})
