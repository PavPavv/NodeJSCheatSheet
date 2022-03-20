const path = require("path");

const testPath = path.join('first', 'second', 'third');

console.log('testPath: ', testPath)

console.log(__dirname);
console.log(__filename);

const testResolve = path.resolve('first', 'second');
console.log('testResolve: ',testResolve);

const parsedPath = path.parse(testResolve);
console.log('parsedPath: ', parsedPath);

console.log('path.basename: ',path.basename(testResolve));
console.log('path.extname: ', path.extname(__filename));
console.log('path.isAbsolute: ', path.isAbsolute(testResolve));
console.log('path.format: ', path.format(parsedPath));
console.log('path.normalize: ', path.normalize(path.resolve('..','..')));
