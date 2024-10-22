function addTask(task) {  
  // Create a new div element  
  const taskContainer = document.createElement('div');  
  taskContainer.className = 'task-item';  // Give it a class for styling  

  // Create a checkbox element  
  const checkbox = document.createElement('input');  
  checkbox.type = 'checkbox';  

  // Append checkbox and task text to the div  
  taskContainer.appendChild(checkbox);  
  taskContainer.appendChild(document.createTextNode(task));  

  // When the checkbox is checked or unchecked, apply the fading style  
  checkbox.addEventListener('change', function() {  
      if (checkbox.checked) {  
          taskContainer.style.opacity = '0.5';  // Set opacity to make it fade  
          taskContainer.style.textDecoration = 'line-through'; // Optionally strike through  
      } else {  
          taskContainer.style.opacity = '1';   // Reset opacity  
          taskContainer.style.textDecoration = 'none'; // Reset strike through  
      }  
  });  

  // Find the task list in the document and append the new div to it  
  document.querySelector('.task-list').appendChild(taskContainer);  
}  

// Set up the event listener for the button click  
document.querySelector('.enter-task').addEventListener('click', function() {  
  // Get the value entered by the user in the input field  
  const task = document.getElementById('task').value;  

  // Call the addTask function with the user's input as an argument  
  addTask(task);  

  // Clear the input field after adding the task  
  document.getElementById('task').value = '';  
});