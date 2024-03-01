const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");
const time = document.getElementById("time");
const pomodoroMinutes = 25;
let pomodoroTime = pomodoroMinutes * 60;
const shortBreakMinutes = 5;
let shortBreakTime = shortBreakMinutes * 60;
const longBreakMinutes = 15;
let longBreakTime = longBreakMinutes * 60;
let timerInterval;
const startButton = document.getElementById("timer-start");
const buttonText = document.getElementById("button-text");

document.addEventListener("DOMContentLoaded", changeTimer);

function changeBorderBottom() {
  pomodoroButton.style.borderBottom = "0px";
  shortBreakButton.style.borderBottom = "0px";
  longBreakButton.style.borderBottom = "0px";
}

function changeTimer() {
  pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
  time.innerHTML = formatTime(pomodoroTime);

  pomodoroButton.addEventListener("click", function () {
    changeBorderBottom();
    pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(pomodoroTime);
  });

  shortBreakButton.addEventListener("click", function () {
    changeBorderBottom();
    shortBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(shortBreakTime);
  });

  longBreakButton.addEventListener("click", function () {
    changeBorderBottom();
    longBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(longBreakTime);
  });

  selectTimerDuration();
}

function selectTimerDuration() {
  startButton.addEventListener("click", function () {
    let selectedDuration;
    if (pomodoroButton.style.borderBottom !== "0px") {
      selectedDuration = pomodoroTime;
    } else if (shortBreakButton.style.borderBottom !== "0px") {
      selectedDuration = shortBreakTime;
    } else if (longBreakButton.style.borderBottom !== "0px") {
      selectedDuration = longBreakTime;
    }
    console.log(selectedDuration);

    startTimer(selectedDuration);
  });
}

function startTimer(duration) {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    if (duration <= 0) {
      clearInterval(timerInterval);
    } else {
      time.innerHTML = formatTime(duration);
      duration--;
    }
  }, 1000);

  buttonText.innerHTML = "STOP";
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}
