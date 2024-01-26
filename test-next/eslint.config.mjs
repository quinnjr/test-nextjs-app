import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import * as eslintrc from '@eslint/eslintrc';

export default [
  {
    languageOptions: {
      globals: eslintrc.Legacy.environments.get('es2024')
    },
    plugins: {
      unicorn: eslintPluginUnicorn
    },
    extends: 'next/core-web-vitals'
  }
]
