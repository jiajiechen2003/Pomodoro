const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");
const time = document.getElementById("time");
const pomodoroMinutes = 0.1;
let pomodoroTime = pomodoroMinutes * 60;
const shortBreakMinutes = 5;
let shortBreakTime = shortBreakMinutes * 60;
const longBreakMinutes = 15;
let longBreakTime = longBreakMinutes * 60;
let timerInterval = null;
const startButton = document.getElementById("timer-start");
const buttonText = document.getElementById("button-text");
const pomodoroTimer = document.querySelector(".pomodoro-timer");
const pomodoroTimerText = document.querySelector(".pomodoro-timer h1");
const buttonBackground = document.querySelector(".start-button button");

document.addEventListener("DOMContentLoaded", changeTimer);
document.addEventListener("DOMContentLoaded", changeTimerStyle);

function changeBorderBottom() {
  pomodoroButton.style.borderBottom = "0px";
  shortBreakButton.style.borderBottom = "0px";
  longBreakButton.style.borderBottom = "0px";
}

function changeTimerStyle() {
  pomodoroButton.addEventListener("click", function () {
    pomodoroTimer.style.backgroundColor = "#caf0f8";
    pomodoroTimer.style.border = "5px solid #00b4d8";
    pomodoroTimerText.style.color = "#0077b6";
    startButton.style.color = "#0077b6";
    buttonBackground.style.backgroundColor = "#90e0ef";
  });

  shortBreakButton.addEventListener("click", function () {
    pomodoroTimer.style.backgroundColor = "#60FF91";
    pomodoroTimer.style.border = "5px solid #10CC4A";
    pomodoroTimerText.style.color = "#307F48";
    startButton.style.color = "#307F48";
    buttonBackground.style.backgroundColor = "#14FF5C";
  });

  longBreakButton.addEventListener("click", function () {
    pomodoroTimer.style.backgroundColor = "#fff2b2";
    pomodoroTimer.style.border = "5px solid #ffd400";
    pomodoroTimerText.style.color = "#fdc500";
    startButton.style.color = "#fdc500";
    buttonBackground.style.backgroundColor = "#ffee99";
  });
}

function changeTimer() {
  pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
  time.innerHTML = formatTime(pomodoroTime);

  pomodoroButton.addEventListener("click", function () {
    changeBorderBottom();
    pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(pomodoroTime);
    clearInterval(timerInterval);
    buttonText.innerHTML = "START";
  });

  shortBreakButton.addEventListener("click", function () {
    changeBorderBottom();
    shortBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(shortBreakTime);
    clearInterval(timerInterval);
    buttonText.innerHTML = "START";
  });

  longBreakButton.addEventListener("click", function () {
    changeBorderBottom();
    longBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(longBreakTime);
    clearInterval(timerInterval);
    buttonText.innerHTML = "START";
  });

  selectTimerDuration();
}

function selectTimerDuration() {
  startButton.addEventListener("click", function () {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      buttonText.innerHTML = "START";
    } else {
      let selectedDuration;
      if (pomodoroButton.style.borderBottom !== "0px") {
        selectedDuration = pomodoroTime;
      } else if (shortBreakButton.style.borderBottom !== "0px") {
        selectedDuration = shortBreakTime;
      } else if (longBreakButton.style.borderBottom !== "0px") {
        selectedDuration = longBreakTime;
      }

      startTimer(selectedDuration);
    }
  });
}

function startTimer(duration) {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    if (duration <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      buttonText.innerHTML = "START";
      time.innerHTML = formatTime(duration);
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
