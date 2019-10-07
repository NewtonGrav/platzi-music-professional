module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ["error", "double"],
    'space-before-function-paren': 1,
    semi: 0,
    'no-trailing-spaces': 1
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
