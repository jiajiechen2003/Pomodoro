let pomodoroButton = document.getElementById("pomodoro-button");
let shortBreakButton = document.getElementById("short-break-button");
let longBreakButton = document.getElementById("long-break-button");

function changeTimer() {
  pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";

  pomodoroButton.addEventListener("click", function () {
    shortBreakButton.style.borderBottom = "0px";
    longBreakButton.style.borderBottom = "0px";
    pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
  });

  shortBreakButton.addEventListener("click", function () {
    shortBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    longBreakButton.style.borderBottom = "0px";
    pomodoroButton.style.borderBottom = "0px";
  });

  longBreakButton.addEventListener("click", function () {
    shortBreakButton.style.borderBottom = "0px";
    longBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    pomodoroButton.style.borderBottom = "0px";
  });
}

document.addEventListener("DOMContentLoaded", changeTimer);
