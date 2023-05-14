module.exports = {
  env: { browser: true, es2021: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin: prettier/recommended',
    'plugin: react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'ract', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhuastive-deps': 'off',
    'no-unsed-vars': 'error'
  },
  settings: { react: { version: 'detect' } }
}
