const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

const STANDARD_OPTIONS = { singleton: true, strictVersion: false, requiredVersion: 'auto' };

module.exports = withNativeFederation({

  name: 'plugin',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: {
    '@angular/core': STANDARD_OPTIONS,
    '@angular/animations': STANDARD_OPTIONS,
    '@angular/common': STANDARD_OPTIONS,
    '@angular/compiler': STANDARD_OPTIONS,
    '@angular/core': STANDARD_OPTIONS,
    '@angular/forms': STANDARD_OPTIONS,
    '@angular/material': STANDARD_OPTIONS,
    '@angular/material/core': STANDARD_OPTIONS,
    '@angular/material/button': STANDARD_OPTIONS,
    '@angular/material/card': STANDARD_OPTIONS,
    '@angular/platform-browser': STANDARD_OPTIONS,
    '@angular/platform-browser-dynamic': STANDARD_OPTIONS,
    '@angular/router': STANDARD_OPTIONS,
    'rxjs': STANDARD_OPTIONS,
    'tslib': STANDARD_OPTIONS,
    '@my-project/shared': STANDARD_OPTIONS
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket'
    // Add further packages you don't need at runtime
  ]
});
