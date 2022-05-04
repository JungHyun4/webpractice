
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "🤗";
    button.addEventListener("click", delToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function delToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== (li.id));
    console.log(toDos);
    li.remove();
    saveToDo();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
      text : newTodo , 
      id : localStorage.getItem("username")
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
}
function saveToDo(){
    localStorage.setItem(TODOS_KEY ,JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}