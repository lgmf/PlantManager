const ModuleResolverPlugin = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.jsx', '.ios.js', '.android.js', '.json'],
    alias: {
      '@core': './src/core',
      '@design-system': './src/design-system',
      '@images': './src/images',
      '@utils': './src/utils',
    },
  },
];

module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [ModuleResolverPlugin],
  };
};
