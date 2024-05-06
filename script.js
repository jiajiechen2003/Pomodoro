const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");
const time = document.getElementById("time");
let pomodoroActive;
let shortBreakActive;
let longBreakActive;
const pomodoroMinutes = 25;
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

function changeActiveTimer() {
  pomodoroActive = false;
  shortBreakActive = false;
  longBreakActive = false;
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
  pomodoroActive = true;
  time.innerHTML = formatTime(pomodoroTime);

  pomodoroButton.addEventListener("click", function () {
    startButton.click();
    changeBorderBottom();
    changeActiveTimer();
    pomodoroActive = true;
    pomodoroButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(pomodoroTime);
    clearInterval(timerInterval);
    buttonText.innerHTML = "START";
  });

  shortBreakButton.addEventListener("click", function () {
    startButton.click();
    changeBorderBottom();
    changeActiveTimer();
    shortBreakActive = true;
    shortBreakButton.style.borderBottom = "1px solid rgb(177, 177, 177)";
    time.innerHTML = formatTime(shortBreakTime);
    clearInterval(timerInterval);
    buttonText.innerHTML = "START";
  });

  longBreakButton.addEventListener("click", function () {
    startButton.click();
    changeBorderBottom();
    changeActiveTimer();
    longBreakActive = true;
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
      if (pomodoroActive) {
        selectedDuration = pomodoroTime;
      } else if (shortBreakActive) {
        selectedDuration = shortBreakTime;
      } else if (longBreakActive) {
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
  return [minutes, remainingSeconds]
    .map((num) => num.toString().padStart(2, "0"))
    .join(":");
}

/* ----------------------------------------------- KANBAN ------------------------------------------ */

const addTaskButton = document.getElementById("add-task");
const kanbanToDoColumn = document.querySelector(".kanban-column.to-do");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  let task = document.createElement("div");
  let taskTitleInput = document.createElement("input");
  let taskDescriptionTextarea = document.createElement("textarea");
  let taskTitle = document.createElement("h1");
  let taskDescription = document.createElement("h2");
  let confirmButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  task.id = "task-" + Math.floor(Math.random() * 1000);
  task.classList.add("task");
  task.classList.add("draggable");
  taskTitle.classList.add("task-title");
  taskDescription.classList.add("task-description");
  confirmButton.classList.add("btn", "btn-success");
  deleteButton.classList.add("btn", "btn-danger");
  task.setAttribute("draggable", "true");

  taskTitleInput.type = "text";
  taskTitleInput.placeholder = "Title";
  taskDescriptionTextarea.placeholder = "Description";
  confirmButton.textContent = "Confirm";
  deleteButton.textContent = "Delete Task";

  task.appendChild(taskTitleInput);
  task.appendChild(taskDescriptionTextarea);
  task.appendChild(confirmButton);

  kanbanToDoColumn.appendChild(task);

  confirmButton.addEventListener("click", function () {
    if (taskTitleInput.value !== "" && taskDescriptionTextarea.value !== "") {
      let title = taskTitleInput.value;
      let description = taskDescriptionTextarea.value;

      taskTitle.textContent = title;
      taskDescription.textContent = description;

      task.removeChild(taskTitleInput);
      task.removeChild(taskDescriptionTextarea);

      task.appendChild(taskTitle);
      task.appendChild(taskDescription);
      task.appendChild(deleteButton);

      confirmButton.style.display = "none";
    } else {
      alert("Enter Text");
    }
  });

  deleteButton.addEventListener("click", function () {
    task.parentNode.removeChild(task);
  });

  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragover", dragOver);
  task.addEventListener("drop", dragDrop);
}

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}


function dragDrop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text/plain");
  const draggedTask = document.getElementById(taskId);
  if (event.target.classList.contains("kanban-column")) {
    event.target.appendChild(draggedTask);
    event.target.classList.remove("hovered");
  }
}
