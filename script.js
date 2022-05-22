var currentDate = document.querySelector("#currentDay");
var time = document.querySelector(".hour");
var currentTime = moment().format("HH");
var eight = document.querySelector("#eightam");
var nine = document.querySelector("#nineam");
var ten = document.querySelector("#tenam");
var eleven = document.querySelector("#elevenam");
var twelve = document.querySelector("#twelvepm");
var one = document.querySelector("#onepm");
var two = document.querySelector("#twopm");
var three = document.querySelector("#threepm");
var four = document.querySelector("#fourpm");
var five = document.querySelector("#fivepm");
var saveBtn = document.querySelector(".saveBtn");

var timer = function () {
  var date = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentDate.textContent = date;
};
setInterval(timer, 1000);

function colorBlock() {
  if (currentTime == 8) {
    eight.setAttribute("class", "present");
  } else if (currentTime > 8) {
    eight.setAttribute("class", "past");
  } else if (currentTime < 8) {
    eight.setAttribute("class", "future");
  }
  if (currentTime == 9) {
    nine.setAttribute("class", "present");
  } else if (currentTime > 9) {
    nine.setAttribute("class", "past");
  } else if (currentTime < 9) {
    nine.setAttribute("class", "future");
  }
  if (currentTime == 10) {
    ten.setAttribute("class", "present");
  } else if (currentTime > 10) {
    ten.setAttribute("class", "past");
  } else if (currentTime < 10) {
    ten.setAttribute("class", "future");
  }
  if (currentTime == 11) {
    eleven.setAttribute("class", "present");
  } else if (currentTime > 11) {
    eleven.setAttribute("class", "past");
  } else if (currentTime < 11) {
    eleven.setAttribute("class", "future");
  }
  if (currentTime == 12) {
    twelve.setAttribute("class", "present");
  } else if (currentTime > 12) {
    twelve.setAttribute("class", "past");
  } else if (currentTime < 12) {
    twelve.setAttribute("class", "future");
  }
  if (currentTime == 1) {
    one.setAttribute("class", "present");
  } else if (currentTime > 1) {
    one.setAttribute("class", "past");
  } else if (currentTime < 1) {
    one.setAttribute("class", "future");
  }
  if (currentTime == 2) {
    two.setAttribute("class", "present");
  } else if (currentTime > 2) {
    two.setAttribute("class", "past");
  } else if (currentTime < 2) {
    two.setAttribute("class", "future");
  }
  if (currentTime == 3) {
    three.setAttribute("class", "present");
  } else if (currentTime > 3) {
    three.setAttribute("class", "past");
  } else if (currentTime < 3) {
    three.setAttribute("class", "future");
  }
  if (currentTime == 4) {
    four.setAttribute("class", "present");
  } else if (currentTime > 4) {
    four.setAttribute("class", "past");
  } else if (currentTime < 4) {
    four.setAttribute("class", "future");
  }
  if (currentTime == 5) {
    five.setAttribute("class", "present");
  } else if (currentTime > 5) {
    five.setAttribute("class", "past");
  } else if (currentTime < 5) {
    five.setAttribute("class", "future");
  }
}
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var schedule = document.querySelectorAll("textarea").value;
  schedule.forEach(function () {
    localStorage.setItem("Work", schedule);
  });
});

colorBlock();
