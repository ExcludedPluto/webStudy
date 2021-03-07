const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const compression = require("compression");
const topicRouter = require("./routes/topic");
const indexRouter = require("./routes/index");
const helmet = require("helmet");
app.use(helmet());

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get("*", (request, response, next) => {
   fs.readdir("./data", (error, filelist) => {
      request.list = filelist;
      next();
   });
});

app.use("/", indexRouter);

app.use("/topic", topicRouter);

app.use((request, response, next) => {
   response.status(404).send("can not found");
});

app.use((err, request, response, next) => {
   console.error(err.stack);
   response.status(500).send("error!");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
