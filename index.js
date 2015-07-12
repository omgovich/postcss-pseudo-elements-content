var postcss = require('postcss');

module.exports = postcss.plugin('postcss-pseudo-elements-content', function (opts) {
    opts = opts || {};

    var customPseudoExp = /(.*::?)(after|before)(-c)$/;

    return function (css) {

        css.eachRule(function(rule) {
            var hasCustomPseudo = false;
            var selectors = [];
            rule.selectors.forEach(function(selector){
                var isCustomPseudo = customPseudoExp.test(selector);
                if (isCustomPseudo) {
                    hasCustomPseudo = true;
                    selector = selector.replace(customPseudoExp, '$1$2');
                }
                selectors.push(selector);
            });
            if (hasCustomPseudo) {
                rule.selector = selectors.join(', ');
                var contentDecl = postcss.decl({ prop: 'content', value: "''" });
                rule.append(contentDecl);
            }
        });

    };
});
