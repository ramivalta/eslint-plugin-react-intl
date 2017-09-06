var intlMessageFormatParser = require('intl-messageformat-parser');
/*

*/
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {
    function reportInvalidIcuMessageSyntax(node, errorMessage) {
        context.report({
            node: node,
            message: 'Invalid ICU Message syntax in defaultMessage: ' + errorMessage
        });
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
        JSXElement: function(node) {
            if (node.openingElement.name.name === 'FormattedMessage') {
                node.openingElement.attributes.forEach(function (jsxAttribute) {
                    if (
                        jsxAttribute.name && jsxAttribute.name.type === 'JSXIdentifier'&&
                        jsxAttribute.name.name === 'defaultMessage' && jsxAttribute.value.type === 'Literal'
                    ) {
                        try {
                            intlMessageFormatParser.parse(jsxAttribute.value.value);
                        } catch (err) {
                            reportInvalidIcuMessageSyntax(jsxAttribute.value, err.message);
                        }
                    }
                });
            }
        }

    };
};

module.exports.schema = [{
    type: 'object',
    properties: {},
    additionalProperties: false
}];
