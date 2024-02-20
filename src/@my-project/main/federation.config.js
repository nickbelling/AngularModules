const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

const config = withNativeFederation({
  name: 'main-app',
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }),
    "@my-project/shared": { singleton: true, strictVersion: true, requiredVersion: '0.0,1', version: '0.0.1' }
  },
  skip: [],
  sharedMappings: [
    '@my-project/shared'
  ]
});

console.log(config);

module.exports = config;
