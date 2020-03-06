module.exports = {
  root: true,

  parser: '@typescript-eslint/parser', // Make ESLint compatible with TypeScript
  parserOptions: {
    // Enable linting rules with type information from our tsconfig
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],

    sourceType: 'module', // Allow the use of imports / ES modules

    ecmaFeatures: {
      impliedStrict: true, // Enable global strict mode
    },
  },

  // Specify global variables that are predefined
  env: {
    node: true, // Enable node global variables & Node.js scoping
    es2020: true, // Add all ECMAScript 2020 globals and automatically set the ecmaVersion parser option to ES2020
  },

  plugins: [
    '@typescript-eslint', // Add some TypeScript specific rules, and disable rules covered by the typechecker
    'import', // Add rules that help validate proper imports
    'prettier', // Allows running prettier as an ESLint rule, and reporting differences as individual linting issues
  ],

  extends: [
    // ESLint recommended rules
    'eslint:recommended',

    // Add TypeScript-specific rules, and disable rules covered by typechecker
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    // Add rules for import/export syntax
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

    // Add Airbnb + TypeScript support
    'airbnb-base',
    'airbnb-typescript/base',

    // Add rules that specifically require type information using our tsconfig
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // Enable Prettier for ESLint --fix, and disable rules that conflict with Prettier
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    /* NORMAL ESLINT RULES */
    //
    // Enforce empty lines between multi-line class members (like method definitions),
    // but not between single line class members (like properties on a database model).
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    /* TYPESCRIPT ESLINT PLUGIN RULES */
    //
    // Allow unused parameters that start with an underscore.
    // This is the convention in TypeScript, to opt out of the "noUnusedParameters" compiler check.
    // This makes refactoring and building easier, as you can define stub functions that don't use all their arguments.
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    /* IMPORT PLUGIN RULES */
    //
    // Sort imports alphabetically
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: false },
      },
    ],
  },

  overrides: [],
}