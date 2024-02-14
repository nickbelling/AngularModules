// In the compiled output, this is replaced on build with the *actual* built index.js file.
// This exists to redirect the workspace reference to this project (i.e. "@my-project/build" from within the 
// "@my-project" workspace) to the built CommonJS file.
module.exports = require('./../dist/@my-project/build/index.js');