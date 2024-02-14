import { share } from '@softarc/native-federation/build';

// @softarc/native-federation doesn't export its config type,
// so we pull it from the parameters of the imported "share" method
type Config = Parameters<typeof share>[0];

const STANDARD_OPTIONS = { singleton: true, strictVersion: true, eager: true, pinned: true };

const SHARED_PACKAGE_NAMES = [
    '@angular/animations',
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/cdk',
    '@angular/material',
    '@angular/router',
    '@my-project/shared',
    'rxjs',
    'tslib'
];

export const STANDARD_SHARED_MODULES: Config = share(SHARED_PACKAGE_NAMES.reduce(
    (obj: any, packageName: string) => {
        obj[packageName] = {...STANDARD_OPTIONS};
        return obj;
    }, {} as Config)
);

const SHARED_MAPPINGS_ANGULAR: string[] = [
    '@angular/animations',
    '@angular/animations/browser',
    '@angular/common',
    '@angular/common/http',
    '@angular/core',
    '@angular/core/primitives/signals',
    '@angular/core/rxjs/interop',
    '@angular/compiler',
    '@angular/forms',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/platform-browser/animations',
    '@angular/platform-browser/animations/async',
    'rxjs',
    "rxjs/ajax",
    "rxjs/fetch",
    'rxjs/operators',
    "rxjs/testing",
    "rxjs/webSocket",
    'tslib'
];

const SHARED_MAPPINGS_ANGULAR_CDK: string[] = [
    '@angular/cdk',
    '@angular/cdk/a11y',
    '@angular/cdk/accordion',
    '@angular/cdk/bidi',
    '@angular/cdk/clipboard',
    '@angular/cdk/coercion',
    '@angular/cdk/collections',
    '@angular/cdk/dialog',
    '@angular/cdk/drag-drop',
    '@angular/cdk/keycodes',
    '@angular/cdk/layout',
    '@angular/cdk/listbox',
    '@angular/cdk/menu',
    '@angular/cdk/observers',
    '@angular/cdk/observers/private',
    '@angular/cdk/overlay',
    '@angular/cdk/platform',
    '@angular/cdk/portal',
    '@angular/cdk/scrolling',
    '@angular/cdk/stepper',
    '@angular/cdk/table',
    '@angular/cdk/text-field',
    '@angular/cdk/tree'
];

const SHARED_MAPPINGS_ANGULAR_MATERIAL: string[] = [
    '@angular/material',
    '@angular/material/core',
    '@angular/material/autocomplete',
    '@angular/material/badge',
    '@angular/material/bottom-sheet',
    '@angular/material/button',
    '@angular/material/button-toggle',
    '@angular/material/card',
    '@angular/material/checkbox',
    '@angular/material/chips',
    '@angular/material/datepicker',
    '@angular/material/dialog',
    '@angular/material/divider',
    '@angular/material/expansion',
    '@angular/material/form-field',
    '@angular/material/grid-list',
    '@angular/material/icon',
    '@angular/material/input',
    '@angular/material/list',
    '@angular/material/menu',
    '@angular/material/paginator',
    '@angular/material/progress-bar',
    '@angular/material/progress-spinner',
    '@angular/material/radio',
    '@angular/material/select',
    '@angular/material/sidenav',
    '@angular/material/slide-toggle',
    '@angular/material/slider',
    '@angular/material/snack-bar',
    '@angular/material/sort',
    '@angular/material/stepper',
    '@angular/material/table',
    '@angular/material/tabs',
    '@angular/material/toolbar',
    '@angular/material/tooltip',
    '@angular/material/tree'
];

export const SHARED_MAPPINGS: string[] = [
    '@my-project/shared',
    '@my-project/shared/build',
    ...SHARED_MAPPINGS_ANGULAR,
    ...SHARED_MAPPINGS_ANGULAR_CDK,
    ...SHARED_MAPPINGS_ANGULAR_MATERIAL
];
