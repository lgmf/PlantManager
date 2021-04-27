module.exports = {
  env: {
    es2021: true,
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'import',
    'module-resolver',
    'jest',
  ],
  rules: {
    camelcase: 0,
    'no-extra-boolean-cast': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': ['off'],
    'module-resolver/use-alias': ['error', {
      ignoreDepth: 2,
      allowDepthMoreOrLessThanEquality: true,
    }],
  },
};
