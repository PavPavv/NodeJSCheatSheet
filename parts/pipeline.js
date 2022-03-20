const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const { pipeline } = require('stream');

const inputPath = path.join(__dirname, './inputData/file.txt');
const outputPath = path.join(__dirname, './outputData/file.txt.gz');

pipeline(
  fs.createReadStream(inputPath),
  zlib.createGzip(),
  fs.createWriteStream(outputPath),
  (err) => {
    if (err) {
      console.log('Pipeline error: ', err);
    } else {
      console.log('Pipeline success');
    }
  }
);