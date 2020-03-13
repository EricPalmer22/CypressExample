const express = require("express");
const app = express();
const port = 3000;

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/test", (req, res) => {
  let first = req.query.first;
  let delay = req.query.delay;
  
  if (first == "true" && delay == "true") {
    console.log("timeout");
    setTimeout(() => {
      res.send("Delayed response");
    }, 500);
  } else {
    res.send("Response");
  }
});

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
