

function Todo(text, created) {
  this.text = text;
  this.created = created;
}




var $createTodoButton = document.getElementById("createTodo");


var $todoTextInput = document.getElementById('textInput');


$createTodoButton.addEventListener("click", function(){
  console.log($todoTextInput.value);

  var todo = new Todo($todoTextInput.value, new Date().getTime());
  addTodoToList(todo);

});

var $todo = document.getElementsByClassName("todo");


for (var i = 0; i < $todo.length; i++) {

  $todo[i].addEventListener("click", function(e){
    toggleClass(e.currentTarget, "completed");
  });
}

function toggleClass(element, classToToggle) {
  console.log(element.className);

  var classArray = element.className.split(" ");
  var finded = classArray.find(function(className){
    return className == classToToggle;
  });

  if (finded) {
    classArray.pop(finded);
  } else {
    classArray.push(classToToggle);
  }


  element.className = classArray.join(" ");

  console.log(element.className);



}



var addTodoToList = function(todo) {
  var trel = document.createElement("tr");
  trel.className = 'todo';

  var tdel = document.createElement("td");
  tdel.className = 'text-left';

  var tdelTextNode = document.createTextNode(todo.text);
  tdel.appendChild(tdelTextNode);
  trel.appendChild(tdel);

  var container = document.getElementsByClassName("todo-container").item(0);


  container.appendChild(trel);

}
