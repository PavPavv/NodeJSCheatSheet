const fs = require("fs");
const path = require("path");

const dataDir = path.resolve(__dirname, '../data/testFolder', 'one', 'two');
const dataDir1 = path.resolve(__dirname, '../data/testFolder');

//  CREATE RECURSIVELY

//  fs.mkdirSync(path.resolve(__dirname, 'testFolder', 'one', 'two'), { recursive: true });

//  fs.mkdirSync(dataDir, { recursive: true, });

// console.log('START');

// fs.mkdir(dataDir, {recursive: true}, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('folder has been created')
// });

// console.log('END');

//  DELETE RECURSIVELY

// fs.rm(dataDir1, {recursive: true}, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('folder has been deleted recursively');
// });



//  WRITE
//  UPDATE
//  const filePath = path.resolve(__dirname, '../data/test.txt');
const filePath1 = path.resolve(__dirname, '../data/test1.txt');

// fs.writeFile(filePath, 'Some test text.', (err) => {
//   if (err) {
//     console.log('Error occurred while writing file!');
//     return;
//   }
//   console.log('file has been successfully created')
  
//   fs.appendFile(filePath, 'This is a new text!', (err) => {
//     if (err) {
//       console.log('Error occurred while updating the file!');
//       return;
//     }
//     console.log('The file has been updated')
//   });
// });

const writeFileAsync = async (filePath, data) => {
  return new Promise((resolve, reject) => {
    return fs.writeFile(filePath, data, (err) => {
        if (err) {
          console.log('Error occurred while writing file!');
          return reject(err);
        }
        resolve()
    })
  });
};

const appendFileAsync = async (filePath, data) => {
  return new Promise((resolve, reject) => {
    return fs.appendFile(filePath, data, (err) => {
        if (err) {
          console.log('Error occurred while updating file!');
          return reject(err);
        }
        resolve()
    })
  });
};

// writeFileAsync(filePath1, 'Some data.')
//   .then(() => appendFileAsync(filePath1, 'Some more test!'))
//   .then(() => appendFileAsync(filePath1, 'And some more test again!'))
//   .catch((err) => console.log(err))



//  READ

const readAsyncFile = async (filePath) => {
    return new Promise((resolve, reject) => {
      return fs.readFile(filePath, {encoding: 'utf-8',}, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      })
    });
};

// writeFileAsync(filePath1, 'Some data.')
//   .then(() => appendFileAsync(filePath1, 'Some more test!'))
//   .then(() => appendFileAsync(filePath1, 'And some more test again!'))
//   .then(() => readAsyncFile(filePath1))
//   .then(data => console.log(data))
//   .catch((err) => console.log(err))

const deleteAsyncFile = async (filePath) => {
  return new Promise((resolve, reject) => {
    return fs.rm(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  });
};

// deleteAsyncFile(filePath1)
//   .then(() => console.log('deleted'))

//  TEST
const text = process.env.TEXT || 'Some small text';

// writeFileAsync(path.resolve(__dirname, 'test-test.txt'), text)
//   .then(() => readAsyncFile(path.resolve(__dirname, 'test-test.txt')))
//   .then((data) => {
//     console.log(data)
//     return data.split(' ').length;
//   })
//   .then(count => writeFileAsync(path.resolve(__dirname, 'test-test1.txt'), `Words: ${count}`))
//   .then(() => deleteAsyncFile(path.resolve(__dirname, 'test-test.txt')))
