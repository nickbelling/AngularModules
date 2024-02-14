const { withNativeFederation, share, shareAll } = require('@angular-architects/native-federation/config');
const { SHARED_MAPPINGS } = require('@my-project/build');

module.exports = withNativeFederation({
  name: 'plugin',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },
  sharedMappings: SHARED_MAPPINGS
});
