function addTask() {
            let taskText = document.getElementById("taskInput").value;
            let task = document.createElement("div");
            task.className = "task";
            task.innerText = taskText;
            task.onclick = () => task.remove();
            document.getElementById("taskList").appendChild(task);
        }
