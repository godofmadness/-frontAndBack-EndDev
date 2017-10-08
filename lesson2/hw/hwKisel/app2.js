// JQEURY TUTORIAL BASICS


  var $createTodoButton = $("#createTodo"); // document.getElementById("createTodo");
  var $todoTextInput = document.getElementById("textInput");
  var $todoContainer = $(".todo-container");// document.getElementsByClassName("createTodo");
  var $todoList = document.getElementsByClassName("todo");

  function Todo(text, created) {
    this.text = text;
    this.created = created;
  }

  // create todo changed to jquery style
  $createTodoButton.click(function(e){
        var todotext = document.getElementById("textInput").value;


        var todo = new Todo(todotext, new Date().getTime());
        addTodoToList(todo);
  });



  //TODO add todo list changed to render todo view from string ( !IMPORTANT )
function addTodoToList(todo) {

    // get tempate string
    var todoDOMElementStringRepresentation = todoTemplate.replace("{{text}}", todo.text);

    // create custom container element
    var template = document.createElement("template");
    // add template to this element
    template.innerHTML = todoDOMElementStringRepresentation;

    console.log(template);

    // get element
    var todoElement = template.content.firstChild;
    // add completed event listener
    $(template.content.firstChild).on("completed", onCompleteEventListener);
    // add todo to container
    $todoContainer[0].append(todoElement);
}


$todoContainer[0].addEventListener("click", function(e){

  // check target tag name
  switch (e.target.tagName) {
    // if it is checkbox
    case "INPUT":

      // create custom completed event that bubbles up to DOM
      var completedEvent = new CustomEvent("completed", {bubbles: true});
      // dispatchEvent completed event;
      e.target.dispatchEvent(completedEvent);

      break;

      // if it is delete icon
    case "I":
      // delete of todo
      var deleteEvent = new CustomEvent("todoDelete", {bubbles: true});
      e.target.dispatchEvent(deleteEvent);

      break;
      // if it is the whole divs
    default:

  }

});

// catch completed event on todo item (using jquery)
$(".todo").on("completed", onCompleteEventListener);
$(".todo").on("todoDelete", onDeleteEventListener);

function onDeleteEventListener(e) {
  $(this).remove();
}

function onCompleteEventListener(e) {

  // wrap this in jqeury
  $(this).toggleClass("completed");
}


//template in string representation

var todoTemplate =
'<tr class="todo">' +
  '<td class="text-left todo-content">' +

    '<div class="todo-content-left">' +
          '<input type="checkbox" class="todo-compelete-indicator">' +
          '<div class="todo-text"> {{text}} </div>' +
    '</div>' +

    '<div class="todo-content-right">' +
      '<i class="fa fa-trash" aria-hidden="true"></i>' +
    '</div>' +
  '</td>' +
'</tr>';
