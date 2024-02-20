const { withNativeFederation, share, shareAll } = require('@angular-architects/native-federation/config');
const { SHARED_MAPPINGS, STANDARD_SHARED_MODULES } = require('@my-project/build');

const STANDARD_SHARE_OPTIONS = { singleton: true, requiredVersion: 'auto' };

module.exports = withNativeFederation({
  name: 'plugin',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: share({
    '@angular/animations': STANDARD_SHARE_OPTIONS,
    '@angular/core': STANDARD_SHARE_OPTIONS,
    '@angular/common': STANDARD_SHARE_OPTIONS,
    '@angular/compiler': STANDARD_SHARE_OPTIONS,
    '@angular/forms': STANDARD_SHARE_OPTIONS,
    '@angular/platform-browser': STANDARD_SHARE_OPTIONS,
    '@angular/platform-browser-dynamic': STANDARD_SHARE_OPTIONS,
    '@angular/cdk': STANDARD_SHARE_OPTIONS,
    '@angular/cdk-experimental': STANDARD_SHARE_OPTIONS,
    '@angular/material': STANDARD_SHARE_OPTIONS,
    '@angular/material-experimental': STANDARD_SHARE_OPTIONS,
    '@angular/router': STANDARD_SHARE_OPTIONS,
    '@my-project/shared': STANDARD_SHARE_OPTIONS,
    'rxjs': STANDARD_SHARE_OPTIONS,
    'tslib': STANDARD_SHARE_OPTIONS
  }),
  sharedMappings: SHARED_MAPPINGS
});
