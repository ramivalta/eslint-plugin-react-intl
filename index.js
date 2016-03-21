'use strict';

module.exports = {
    rules: {
        'string-is-marked-for-translation': require('./lib/rules/string-is-marked-for-translation')
    },
    rulesConfig: {
        'string-is-marked-for-translation': 0
    }
};
