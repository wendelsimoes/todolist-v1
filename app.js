// Import express
const express = require("express");
// Import body-parser
const bodyParser = require("body-parser");
// Import date module
const date = require(__dirname + "/date.js");

const port = 3000;

const app = express();

// Setup EJS
app.set("view engine", "ejs");

// Setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Serve public static folder
app.use(express.static("public"));

var items = [];

app.get("/", function (req, res) {
  res.render("list", { currentDay: date(), newItems: items });
});

app.post("/", function (req, res) {
  items.push(req.body.newItem);

  res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
