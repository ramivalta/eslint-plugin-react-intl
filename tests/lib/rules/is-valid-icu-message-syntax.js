/**
 * @fileoverview Catch strings that aren't marked for translation
 * @author Rami Valta
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/is-valid-icu-message-syntax');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('is-valid-icu-message-syntax', rule, {
  valid: [
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        <FormattedMessage id=\'asdjl\'',
        '            description=\'asdjfl\'',
        '            defaultMessage=\'foobar\'',
        '        />',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    },
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        <FormattedMessage id=\'asdjl\'',
        '            description=\'asdjfl\'',
        '            defaultMessage=\'{from}-{to} of {total, plural, one {# message} other {# messages}}\'',
        '        />',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }
  ],

  invalid: [
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        <FormattedMessage id=\'asdjl\'',
        '            description=\'asdjfl\'',
        '            defaultMessage=\'foo { bar\'',
        '        />',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Invalid ICU Message syntax in defaultMessage: Expected ",", "}" or [^ \\t\\n\\r,.+={}#] but end of input found.'}]
    },
  ]
});
