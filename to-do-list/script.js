document.addEventListener('DOMContentLoaded', function() {
   loadTasks();
});

function loadTasks() {
   const tasks = JSON.parse(localStorage.getItem('tasks'));
   if (tasks) {
       tasks.forEach(task => {
           addNew(task);
       });
   }
}

function updateLocalStorage() {
   const tasks = [];
   document.querySelectorAll('#task').forEach(task => {
       const text = task.querySelector('input').value;
       tasks.push(text);
   });
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addNew(taskText) {
   const task = document.createElement('div');
   task.id = "task";
   task_list.append(task);

   const p = document.createElement('input');
   p.value = taskText || your_task;
   p.setAttribute('readonly', 'readonly');
   p.id = "main-task";
   task.append(p);

   const edit = document.createElement('button');
   edit.innerHTML = "Edit";
   edit.id = "edit";
   edit.title = "Click here to edit";

   const deletes = document.createElement('button');
   deletes.innerHTML = "Delete";
   deletes.id = "delete";
   deletes.title = "Click here to delete";

   const done = document.createElement('button');
   done.innerHTML = "Done";
   done.className = "done";
   done.id = "done";
   done.title = "Click here if you finished";

   task.append(edit, deletes, done);

   deletes.addEventListener('click', function(e) {
       deleteAction(e);
       updateLocalStorage();
   });

   edit.addEventListener('click', function(e) {
       editAction(e);
       updateLocalStorage();
   });

   done.addEventListener('click', function(e) {
       doneAction(e);
       updateLocalStorage();
   });

   your_task = "";
   reCalculate();
}

const form = document.querySelector('form');
const input = document.querySelector('#task-box');
const task_list = document.querySelector('#task-list');
let your_task;
let p;

form.addEventListener('submit', function(e){
  e.preventDefault();
  your_task = input.value;

  if(!your_task){
     alert("Please Enter Your Task First");
  } else {
     addNew();
     updateLocalStorage();
  }
});
