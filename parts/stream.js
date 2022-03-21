//  Readable
//  Writeable
//  Duplex
//  Transform (the same as Duplex, but can change data while reading)

const fs = require("fs");
const path = require("path");
const http = require("http");

//  read everything at once
// fs.readFile(path.resolve(__dirname, 'test-test1.txt'), (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data)
// });

// const stream = fs.createReadStream(path.resolve(__dirname, 'test-test1.txt'));


//  one chunk equals 64kb by default
// stream.on('data', (chunk) => {
//   console.log(chunk)
// });

// stream.on('end', () => {
//   console.log('End of reading')
// });

// stream.on('open', () => {
//   console.log('Open of reading')
// });


// stream.on('error', () => {
//   console.log('Error of reading')
// });

// const stream = fs.createReadStream(path.resolve(__dirname, 'test-test1.txt'), {
//   encoding: 'utf-8',
// });


// const wStream = fs.createWriteStream(path.resolve(__dirname, 'test-test2.txt'));

// for (let i = 0; i < 20; i++) {
//   wStream.write(i  + '\n');
// }

// wStream.end();
// wStream.close();
// wStream.destroy();
// wStream.on('error', (err) => {
//   console.log('Error: ', err);
// });

http.createServer((req, res) => {
  //  req - readable stream
  //  res - writeable stream
  const stream = fs.createReadStream(path.resolve(__dirname, 'test-test1.txt'));
  // stream.on('data', (chunk) => {
  //   res.write(chunk);
  // });

  // stream.on('end', () => {
  //   res.end();
  // });

  //  stream.pipe(res)...
});



