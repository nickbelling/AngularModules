const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

const STANDARD_OPTIONS = { singleton: true, eager: true };

module.exports = withNativeFederation({

  shared: {
  // shared: share({
  //   '@angular/core': STANDARD_OPTIONS,
  //   '@angular/animations': STANDARD_OPTIONS,
  //   '@angular/cdk': STANDARD_OPTIONS,
  //   '@angular/common': STANDARD_OPTIONS,
  //   '@angular/compiler': STANDARD_OPTIONS,
  //   '@angular/forms': STANDARD_OPTIONS,
  //   '@angular/material': STANDARD_OPTIONS,
  //   '@angular/platform-browser': STANDARD_OPTIONS,
  //   '@angular/platform-browser-dynamic': STANDARD_OPTIONS,
  //   '@angular/router': STANDARD_OPTIONS,
  //   'rxjs': STANDARD_OPTIONS,
  //   'tslib': STANDARD_OPTIONS,
  //   //'@my-project/shared': STANDARD_OPTIONS
  // }),
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: []
});
