// Import express
const express = require("express");

// Import body-parser
const bodyParser = require("body-parser");

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
