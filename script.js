const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");
const time = document.getElementById('time');
let pomodoroTime 

function changeTimer() {
  pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";

  pomodoroButton.addEventListener("click", function () {
    shortBreakButton.style.borderBottom = "0px";
    longBreakButton.style.borderBottom = "0px";
    pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = `${25}:${10}`
  });

  shortBreakButton.addEventListener("click", function () {
    shortBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    longBreakButton.style.borderBottom = "0px";
    pomodoroButton.style.borderBottom = "0px";
    time.innerHTML = `${5}:${10}`
  });

  longBreakButton.addEventListener("click", function () {
    shortBreakButton.style.borderBottom = "0px";
    longBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    pomodoroButton.style.borderBottom = "0px";
    time.innerHTML = `${15}:${10}`
  });
}

document.addEventListener("DOMContentLoaded", changeTimer);
