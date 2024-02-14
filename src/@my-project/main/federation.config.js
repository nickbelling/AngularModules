const { withNativeFederation } = require('@angular-architects/native-federation/config');
const { STANDARD_SHARED_MODULES, SHARED_MAPPINGS } = require('@my-project/build');

module.exports = withNativeFederation({
  name: 'main-app',
  shared: STANDARD_SHARED_MODULES,
  skip: [],
  sharedMappings: SHARED_MAPPINGS
});
