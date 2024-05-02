"use strict";

const fs = require("fs"),
  httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes");

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        // Send error response and return to prevent further execution
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content!");
        return;
      }
      
      // Write response headers before sending data
      res.writeHead(httpStatus.OK, contentTypes.html);
      
      // Send file content as response body
      res.end(data);
    });
  },
};
