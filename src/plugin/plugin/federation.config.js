const { withNativeFederation, share, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'plugin',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, requiredVersion: 'auto', strictVersion: true })
  },
  skip: [] // Skipping for now to check externals
});
