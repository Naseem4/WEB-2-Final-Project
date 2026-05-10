import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
<<<<<<< HEAD
import tseslint from 'typescript-eslint'
=======
>>>>>>> origin/FE
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
<<<<<<< HEAD
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
=======
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
>>>>>>> origin/FE
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2020,
      globals: globals.browser,
=======
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
>>>>>>> origin/FE
    },
  },
])
