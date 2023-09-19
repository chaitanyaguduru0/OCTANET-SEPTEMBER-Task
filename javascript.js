document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
  
        deleteButton.addEventListener('click', function() {
          taskItem.remove();
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    taskInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        addTaskButton.click();
        event.preventDefault();
      }
    });
  });