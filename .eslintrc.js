module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  rules: {
    'ember/no-old-shims': 'error'
  },
  env: {
    browser: true
  },
  rules: {
  }
};
