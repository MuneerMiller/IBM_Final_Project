// constants declared for input and task list area
const taskinput = document.querySelector("#newTask input");
const taskSelection = document.querySelector(".tasks");


//listener for the enter key. Used to add a new task.

taskinput.addEventListener("keyup", (e) => {
    if (e.keyCode == "Enter") {createTask(); }});

//The onclick event for the 'Add' button
document.querySelector('#push').onclick = function() {createTask();}

//The function that create a task

function createTask() {
    if (taskinput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    }
    else{
        // This block insert HTML that creates each task into the task area div element
        taskSelection.innerHTML += 
        `<div class="task">
        <label id="taskName">
        <input onclick="updateTask(this)" type="checkbox" id="check-task">
        <p>${document.querySelector('#newTask Input').value}</p>
        </label>
        <div class="delete">
        <i class="uil uil-trash"></i></div></div>`;
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
            this.parentNode.remove();}
        }
        taskSelection.offsetHeight >= 300
        ? taskSelection.classList.add("overflow")
        : taskSelection.classList.remove("overflow");

    }
}

function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");}

    else{ 
        taskItem.classList.remove("checked");
    }
}
