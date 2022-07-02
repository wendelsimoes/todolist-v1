function getDayOfWeek() {
  const today = new Date();

  options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const dayOfWeek = today.toLocaleDateString("en-US", options);

  return dayOfWeek;
}

module.exports = getDayOfWeek;
