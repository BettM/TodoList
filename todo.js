//selectors
const todoInput=document.querySelector(".todo-input");//retreaves data from every class "selectors"
const todoButton =document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-List");

//Event Listener
todoButton.addEventListener('click',addTodo);


//functions
function addTodo(event) {
    //prevent form from submitting
   document.preventDefault();

   //Todo DIV
    const todoDiv = document.createElement("div");//creating an element
    todoDiv.classList.add('todo'); 

   //Create LI
   const newTodo = document.createElement("li");
   newTodo.innerText = 'hey';
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //Check MARK BUTTON
    
    //It would be better if you create elements from the html, creating in the script will make your code slow down
   const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //check TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('completed-btn');
    
    //Note that while appending, you should specify where you are appending...something of document.body.append(element)
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
}
