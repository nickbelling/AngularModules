import { initFederation } from '@angular-architects/native-federation';
console.log('initializing app');
initFederation('/assets/federation.manifest.json')
  .catch(err => console.error(err))
  .then(x => {
    console.log('Federation output:', x);
    import('./bootstrap');
  })
  .catch(err => console.error(err));
