const { withNativeFederation, share, shareAll } = require('@angular-architects/native-federation/config');
const { SHARED_MAPPINGS, STANDARD_SHARED_MODULES } = require('@my-project/build');

const STANDARD_SHARE_OPTIONS = { singleton: true, requiredVersion: 'auto' };

module.exports = withNativeFederation({
  name: 'plugin',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: STANDARD_SHARED_MODULES,
  skip: SHARED_MAPPINGS
});
