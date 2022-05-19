var currentDate = document.querySelector("#currentDay");

var timer = function () {
  var date = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentDate.textContent = date;
};
setInterval(timer, 1000);
