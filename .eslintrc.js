module.exports = {
  env: {
    es2021: true,
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
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': ['off'],
    'module-resolver/use-alias': ['error', {
      ignoreDepth: 2,
      allowDepthMoreOrLessThanEquality: true,
    }],
    camelcase: ['off'],
  },
};
