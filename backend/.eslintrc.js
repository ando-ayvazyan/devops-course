module.exports = {
  env: {
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [ '@typescript-eslint' ],
  rules: {
    indent: [ 'error', 2 ],
    semi: [ 'error', 'always' ],
    'object-curly-spacing': [ 2, 'always' ],
    '@typescript-eslint/no-unused-vars': [ 1, { argsIgnorePattern: '^_' } ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  }
};
