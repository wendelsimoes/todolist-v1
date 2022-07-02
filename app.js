const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();
  const dayOfWeek = getDayOfWeek(today);
  let dayInfo = "";

  if (currentDay === 6 || currentDay === 0) {
    dayInfo = "weekend";
  } else {
    dayInfo = "day of week";
  }

  res.render("list", { currentDay: dayOfWeek, dayInfo: dayInfo });
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
}
