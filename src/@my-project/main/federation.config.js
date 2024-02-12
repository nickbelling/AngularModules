const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

const STANDARD_OPTIONS = { singleton: true, strictVersion: false };

module.exports = withNativeFederation({
  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },
  shared: share({
    '@angular/core': STANDARD_OPTIONS,
    '@angular/common': STANDARD_OPTIONS,
    '@angular/forms': STANDARD_OPTIONS,
    '@angular/cdk': STANDARD_OPTIONS,
    '@angular/material': STANDARD_OPTIONS,
    '@my-project/shared': STANDARD_OPTIONS,
    'rxjs': STANDARD_OPTIONS,
    'tslib': STANDARD_OPTIONS
  }),
  skip: []
  }
);
