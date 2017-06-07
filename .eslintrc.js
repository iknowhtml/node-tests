module.exports = {
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: ['chai']
      }
    ],
    'no-console': 0,
    'comma-dangle': ['error', 'only-multiline']
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  }
};
