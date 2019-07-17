var  fs = require("fs");

exports.files = (resource) => {
   return fs.readFileSync(resource);
}

exports.defaultResponse = fs.readFileSync("./index.html");