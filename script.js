
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = `${taskList.children.length + 1}. ${taskText}`;
        taskList.appendChild(listItem);
        taskInput.value = '';  
    }
});

removeTaskBtn.addEventListener('click', function () {
    const lastTask = taskList.lastElementChild;
    if (lastTask) {
        taskList.removeChild(lastTask);
    }
});
