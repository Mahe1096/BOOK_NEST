module.exports = {
    env: {
      node: true,
      commonjs: true,
      es2021: true,
      jest: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
      ecmaVersion: 12,
    },
    rules: {},
  };