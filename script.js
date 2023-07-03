function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");
  
    if (todoInput.value !== '') {
      var todoItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
  
      var label = document.createElement("label");
      label.textContent = todoInput.value;
  
      var editButton = document.createElement("button");
      editButton.className = "edit-button";
      editButton.textContent = "✎";
      editButton.onclick = function() {
        editTodoItem(this);
      };
  
      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "🗑";
      deleteButton.onclick = function() {
        deleteTodoItem(this);
      };
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);
      todoItem.appendChild(editButton);
      todoItem.appendChild(deleteButton);
  
      todoList.appendChild(todoItem);
  
      todoInput.value = '';
    }
  }
  
  function editTodoItem(editButton) {
    var todoItem = editButton.parentNode;
    var label = todoItem.querySelector("label");
    var newTask = prompt("Enter new task:", label.textContent);
  
    if (newTask !== null && newTask !== "") {
      label.textContent = newTask;
    }
  }
  
  function deleteTodoItem(deleteButton) {
    var todoItem = deleteButton.parentNode;
    var todoList = todoItem.parentNode;
    todoList.removeChild(todoItem);
  }
  function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");
  
    if (todoInput.value !== '') {
      var todoItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
  
      var label = document.createElement("label");
      label.textContent = todoInput.value;
  
      var editButton = document.createElement("button");
      editButton.className = "edit-button";
      editButton.textContent = "✎";
      editButton.onclick = function() {
        editTodoItem(this);
      };
  
      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "🗑";
      deleteButton.onclick = function() {
        deleteTodoItem(this);
      };
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);
      todoItem.appendChild(editButton);
      todoItem.appendChild(deleteButton);
  
      todoList.appendChild(todoItem);
  
      todoInput.value = '';
    }
  }
  
  function editTodoItem(editButton) {
    var todoItem = editButton.parentNode;
    var label = todoItem.querySelector("label");
    var newTask = prompt("Enter new task:", label.textContent);
  
    if (newTask !== null && newTask !== "") {
      label.textContent = newTask;
    }
  }
  
  function deleteTodoItem(deleteButton) {
    var todoItem = deleteButton.parentNode;
    var todoList = todoItem.parentNode;
    todoList.removeChild(todoItem);
  }
  