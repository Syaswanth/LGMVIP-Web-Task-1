function addTask() {
  const taskInput = document.getElementById('task');
  const priorityInput = document.getElementById('priority');
  const taskText = taskInput.value.trim();
  const priority = priorityInput.value;

  if (!taskText) {
      alert('Please enter a task.');
      return;
  }

  const taskList = document.getElementById('tasks');

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskTextDiv = document.createElement('div');
  taskTextDiv.classList.add('task-text');
  taskTextDiv.textContent = taskText;
  taskDiv.appendChild(taskTextDiv);

  const clearButton = document.createElement('button');
  clearButton.classList.add('clear-button');
  clearButton.textContent = 'Clear';
  clearButton.onclick = function () {
      taskDiv.remove();
  };
  taskDiv.appendChild(clearButton);

  switch (priority) {
      case 'low':
          taskDiv.style.backgroundColor = '#f1c40f';
          break;
      case 'medium':
          taskDiv.style.backgroundColor = '#e67e22';
          break;
      case 'high':
          taskDiv.style.backgroundColor = '#e74c3c';
          break;
      default:
          taskDiv.style.backgroundColor = '#f8f9fa';
  }

  taskList.appendChild(taskDiv);

  taskInput.value = '';
  priorityInput.value = 'low';
}
