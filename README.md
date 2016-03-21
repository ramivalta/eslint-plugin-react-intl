ESLint-plugin-React-intl
===================

React-intl (2.0) specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install React-intl plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-react-intl
```

# Configuration

Add `plugins` section and specify ESLint-plugin-React as a plugin.

```json
{
  "plugins": [
    "react-intl"
  ]
}
```


If it is not already the case you must also configure `ESLint` to support JSX.

With ESLint 1.x.x:

```json
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```

With ESLint 2.x.x:

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

# List of supported rules

* string-is-marked-for-translation: Catch strings that aren't marked for translation, e.g. contained in a <FormattedSomething /> component from react-intl 2.0.

# Thanks
* [Eslint-plugin-React](https://github.com/yannickcr/eslint-plugin-react) by [Yannick Croissant](https://github.com/yannickcr), where many parts of this plugin were lifted from.

# License

ESLint-plugin-React-intl is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).


[npm-url]: https://npmjs.org/package/eslint-plugin-react-intl
