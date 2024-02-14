const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'package.json');
const destPath = path.join(__dirname, '../dist/@my-project/build/package.json');

fs.copyFileSync(sourcePath, destPath);
console.log('package.json copied to /dist/@my-project/build/package.json.');