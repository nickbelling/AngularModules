import { initFederation } from '@angular-architects/native-federation';
console.log('hello?');
initFederation('/assets/federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
