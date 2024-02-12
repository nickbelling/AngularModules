const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

const STANDARD_OPTIONS = { singleton: true, strictVersion: false };

module.exports = withNativeFederation({

  name: 'plugin',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: share({
    '@angular/core': STANDARD_OPTIONS,
    '@angular/common': STANDARD_OPTIONS,
    '@angular/forms': STANDARD_OPTIONS,
    '@angular/cdk': STANDARD_OPTIONS,
    '@angular/material': STANDARD_OPTIONS,
    'rxjs': STANDARD_OPTIONS,
    'tslib': STANDARD_OPTIONS,
    '@my-project/shared': STANDARD_OPTIONS
  }),

  skip: [
    '@angular/core',
    '@angular/common',
    '@angular/forms',
    '@angular/cdk',
    '@angular/material',
    'rxjs',
    'tslib',
    '@my-project/shared'
  ]
});
