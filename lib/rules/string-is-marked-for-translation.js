var unicodeRegExp = require('unicoderegexp');
/*

*/
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {
    function reportUnTranslatedString(node) {
        context.report({
            node: node,
            message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'
        });
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
        Literal: function(node) {
            if (
                unicodeRegExp.letter.test(node.value) &&
                node.parent &&
                node.parent.type.indexOf('JSX') !== -1 &&
                node.parent.type !== 'JSXAttribute' &&
                typeof node.value !== "boolean" &&
                (
                    node._babelType === 'JSXText' ||
                    node._babelType === 'StringLiteral' ||
                    node._babelType === 'Literal'
                )
            ) {
                reportUnTranslatedString(node);
            }
        }

    };
};

module.exports.schema = [{
    type: 'object',
    properties: {},
    additionalProperties: false
}];
