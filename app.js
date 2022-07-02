const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

var items = [];

app.get("/", function (req, res) {
  const today = new Date();

  options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const dayOfWeek = today.toLocaleDateString("en-US", options);

  res.render("list", { currentDay: dayOfWeek, newItems: items });
});

app.post("/", function (req, res) {
  items.push(req.body.newItem);

  res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
