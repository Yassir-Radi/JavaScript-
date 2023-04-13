'use strict';

const btnPush = document.getElementById('push');
const input = document.querySelector('#newtask input');
const tasks = document.getElementById('tasks');

const addTask = function() {
    if(input.value === '') {
    return alert('you must enter something');
  } else {

    const task = document.createElement('div');
    task.classList.add('task');
    const taskText = document.createElement('p');
    taskText.textContent = input.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';

    
    deleteBtn.addEventListener('click', function() {
    task.remove();
});

task.appendChild(taskText);
task.appendChild(deleteBtn);
tasks.appendChild(task);
input.value = '';
}
};

btnPush.addEventListener('click', addTask);