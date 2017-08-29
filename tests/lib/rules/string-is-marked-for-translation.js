/**
 * @fileoverview Catch strings that aren't marked for translation
 * @author Rami Valta
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/string-is-marked-for-translation');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('string-is-marked-for-translation', rule, {
  valid: [
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        <FormattedMessage id=\'asdjl\'',
        '            description=\'asdjfl\'',
        '            defaultMessage=\'asdasdasd\'',
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
        '    return (<div>test</div>);',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    },
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (<div>{\'test\'}</div>);',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    },

     {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    const foo = (<div>test</div>);',
        '    return foo;',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    const varObjectTest = { testKey : (<div>test</div>) };',
        '    return varObjectTest.testKey;',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    }, {
      code: [
        'var Hello = React.createClass({',
        '  foo: (<div>hello</div>),',
        '  render() {',
        '    return this.foo;',
        '  },',
        '});'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        asdjfl',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        asdjfl',
        '        test',
        '        foo',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    },
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        <FormattedMessage id="erodfasf" defaultMessage="houheirh"/>',
        '        <h4>FALSELS</h4>',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'}]
    },
  ]
});
