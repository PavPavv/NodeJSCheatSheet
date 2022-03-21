const dotenv = require("dotenv");

//  const processPart = require("./parts/process");
//  const pathPart = require("./parts/path");
//  const partUrl = require("./parts/url");
//  const filesystemPart = require("./parts/filesystem");
//  const opSysPart = require("./parts/os");
//  const eventsPart = require("./parts/events");
//  const streamPart = require("./parts/stream");
//  const httpPart = require("./parts/http");
const beFramework = require("./parts/framework");

dotenv.config();

console.log(process.env.PORT);