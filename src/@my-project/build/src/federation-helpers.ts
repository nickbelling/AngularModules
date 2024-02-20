import { share } from '@softarc/native-federation/build';

const ANGULAR_VERSION: string = '^17.1.0';
const RXJS_VERSION: string = '^7.8.0';
const MYPROJECT_VERSION: string = "0.0.1";

// @softarc/native-federation doesn't export its config type,
// so we pull it from the parameters of the imported "share" method
type Config = Parameters<typeof share>[0];
interface ConfigObject {
    singleton: boolean;
    strictVersion: boolean;
    requiredVersion?: string;
    eager?: boolean;
    pinned?: boolean;
    version?: string;
};

// This will be copied to every 
const STANDARD_OPTIONS: ConfigObject = {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    eager: true,
    pinned: true
};

const SHARED_PACKAGE_NAMES = [
    '@angular/animations',
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/cdk',
    '@angular/cdk-experimental',
    '@angular/material',
    '@angular/material-experimental',
    '@angular/router',
    '@my-project/shared',
    'rxjs',
    'tslib'
];

const SHARED_VERSIONS: {[key: string]: string} = {
    '@angular/': ANGULAR_VERSION,
    'rxjs': RXJS_VERSION,
    '@my-project/shared': MYPROJECT_VERSION
};

/**
 * Builds the object that native federation expects to be passed as its "shared" configuration, for example:
 *  shared: share({
 *    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: ANGULAR_VERSION },
 *    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: ANGULAR_VERSION },
 *    // etc
 *  })
 */
export const STANDARD_SHARED_MODULES: Config = share(SHARED_PACKAGE_NAMES.reduce(
    (obj: any, packageName: string, currentIndex: number) => {
        const options: ConfigObject = { ...STANDARD_OPTIONS };
        options.requiredVersion = getSpecifiedVersion(packageName);
        options.version = getSpecifiedVersion(packageName);
        obj[packageName] = options;

        if (currentIndex == (SHARED_PACKAGE_NAMES.length - 1)) {
            //console.log(obj);
        }
        return obj;
    }, {} as Config)
);

function getSpecifiedVersion(packageName: string): string | undefined {
    let requiredVersion: string | undefined = undefined;
    Object.keys(SHARED_VERSIONS).forEach((key: string) => {
        if (packageName.startsWith(key)) {
            requiredVersion = SHARED_VERSIONS[key];
        }
    });
    return requiredVersion;
}

const SHARED_MAPPINGS_ANGULAR: string[] = [
    '@angular/animations',
    '@angular/animations/browser',
    '@angular/common',
    '@angular/common/http',
    '@angular/core',
    '@angular/core/primitives/signals',
    '@angular/core/rxjs-interop',
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
    '@angular/material/tree',
    '@angular/material-experimental',
    '@angular/material-experimental/column-resize',
    '@angular/material-experimental/menubar',
    '@angular/material-experimental/popover-edit',
    '@angular/material-experimental/selection'
];

export const SHARED_MAPPINGS: string[] = [
    '@my-project/shared',
    ...SHARED_MAPPINGS_ANGULAR,
    ...SHARED_MAPPINGS_ANGULAR_CDK,
    ...SHARED_MAPPINGS_ANGULAR_MATERIAL
];
