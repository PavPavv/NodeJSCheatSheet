const dotenv = require("dotenv");

//  const processPart = require("./parts/process");
//  const pathPart = require("./parts/path");
//  const partUrl = require("./parts/url");
const filesystem = require("./parts/filesystem");

dotenv.config();

console.log(process.env.PORT);