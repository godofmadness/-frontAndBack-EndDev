  var $createTodoButton = document.getElementById("createTodo");
  var $todoTextInput = document.getElementById("textInput");
  var $todoContainer = document.getElementsByClassName("todo-container");
  var $todoList = document.getElementsByClassName("todo");



  function Todo(text, created) {
    this.text = text;
    this.created = created;
  }


  $createTodoButton.addEventListener("click", function(e){
        var todotext = document.getElementById("textInput").value;

        var todo = new Todo(todotext, new Date().getTime());
        addTodoToList(todo);
  });


  var addTodoToList = function(todo) {
      var trEl = document.createElement("tr");
      var tdEl = document.createElement('td');

      trEl.classList = "todo";
      tdEl.classList = "text-left";

      var tdelTextNode = document.createTextNode(todo.text);
      tdEl.appendChild(tdelTextNode);
      trEl.appendChild(tdEl);

      $todoContainer.item(0).appendChild(trEl);
  }


  for (var i = 0; i < $todoList.length; i++) {
    $todoList[i].addEventListener("click", function(e){
      toggleClass(e.currentTarget, "completed");
    });
  }


function toggleClass(element, className) {

  var elementClassArray = element.className.split(" ");

  var findedClass = elementClassArray.find(function(name){
    return name === className;
  });

  if (findedClass) {
    elementClassArray.pop(className);
  } else {
    elementClassArray.push(className);
  }

  element.className = elementClassArray.join(" ");
}



// 1. add to trs listener onclick

// 2. trel.classList += 'completed'



// add todo eventlistener

// get value from input

// create Todo object

// add todo object to todo container
