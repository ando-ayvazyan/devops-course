module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [ 'react', '@typescript-eslint' ],
  rules: {
    indent: [ 'error', 2 ],
    semi: [ 'error', 'always' ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
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
