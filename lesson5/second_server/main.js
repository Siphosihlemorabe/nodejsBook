<<<<<<< HEAD
const port = 3008,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);

  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2);
};
=======
const port = 3008,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);

  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2);
};
>>>>>>> 07f93cee7368b883d5fc68f65a86fc96830a8d22
