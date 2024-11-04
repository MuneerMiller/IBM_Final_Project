document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#newTask input");
    const taskContainer = document.querySelector(".tasks");

    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            createTask();
        }
    });

    document.querySelector("#push").addEventListener("click", () => createTask());

    function createTask() {
        if (taskInput.value.trim() === "") {
            alert("Please enter a task name.");
            return;
        }

        const task = document.createElement("div");
        task.className = "task";

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => updateTask(checkbox));
        
        const taskText = document.createElement("p");
        taskText.textContent = taskInput.value.trim();

        label.appendChild(checkbox);
        label.appendChild(taskText);
        task.appendChild(label);

        const deleteBtn = document.createElement("div");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = `<i class="uil uil-trash"></i>`;
        deleteBtn.addEventListener("click", () => removeTask(task));
        task.appendChild(deleteBtn);

        taskContainer.appendChild(task);
        taskInput.value = "";

        toggleOverflow();
    }

    function updateTask(checkbox) {
        const taskText = checkbox.nextElementSibling;
        taskText.classList.toggle("checked", checkbox.checked);
    }

    function removeTask(task) {
        task.style.opacity = "0";
        setTimeout(() => {
            task.remove();
            toggleOverflow();
        }, 300);
    }

    function toggleOverflow() {
        if (taskContainer.scrollHeight > taskContainer.clientHeight) {
            taskContainer.classList.add("tasks-overflow");
        } else {
            taskContainer.classList.remove("tasks-overflow");
        }
    }
});
