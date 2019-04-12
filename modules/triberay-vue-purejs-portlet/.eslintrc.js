
module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    'extends': [
        'plugin:vue/recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
