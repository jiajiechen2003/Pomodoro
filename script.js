const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");
const time = document.getElementById('time');
const pomodoroMinutes = 25;
let pomodoroTime = pomodoroMinutes * 60;
const shortBreakMinutes = 5;
let shortBreakTime = shortBreakMinutes * 60;
const longBreakMinutes = 15;
let longBreakTime = longBreakMinutes * 60;
let timerInterval;
const startButton = document.getElementById("timer-start");

document.addEventListener("DOMContentLoaded", changeTimer);

function changeTimer() {
  pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";

  startButton.addEventListener("click", function () {
    startTimer(pomodoroTime);
    time.innerHTML = formatTime(pomodoroTime);
  })

  pomodoroButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    changeBorderBottom();
    pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(pomodoroTime);
    startButton.addEventListener("click", function () {
      startTimer(pomodoroTime);
      time.innerHTML = formatTime(pomodoroTime);
      clearInterval(timerInterval);
    })
  });

  shortBreakButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    changeBorderBottom();
    shortBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(shortBreakTime);
    startButton.addEventListener("click", function () {
      startTimer(shortBreakTime);
      time.innerHTML = formatTime(shortBreakTime);
      clearInterval(timerInterval);
    })
  });

  longBreakButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    changeBorderBottom();
    longBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(longBreakTime);
    startButton.addEventListener("click", function () {
      startTimer(longBreakTime);
      time.innerHTML = formatTime(longBreakTime);
      clearInterval(timerInterval);
    })
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
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function changeBorderBottom() {
  pomodoroButton.style.borderBottom = "0px";
  shortBreakButton.style.borderBottom = "0px";
  longBreakButton.style.borderBottom = "0px";
}
