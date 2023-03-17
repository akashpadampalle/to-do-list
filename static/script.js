// selecting document todo-list to populate todo-items
const todoList = document.querySelector('#todo-list');


// fetch the todo-items from server and renders using renderList function
function getTodos(){
    fetch('http://localhost:8000/get')
    .then((res) => res.json())
    .then((data) => renderList(data))
    .catch((err) => console.log(err));
}
getTodos();


// renders the list of todo items into the todoList
function renderList(todoArray){
    todoList.innerHTML = '';
    for(let i = 0; i<todoArray.length; i++){
        const date = new Date(todoArray[i].date);
        const element = document.createElement('div');
        element.classList.add('todo-item');

        // if status of item is 1(checked) then cut the text using cut-text css class
        if(todoArray[i].status == 1){
            element.classList.add('dim-text');
        }

        // creating todo-item using template and populating data fetched from server
        element.innerHTML = `
        <div class="todo-item-details" onClick="changeStatus(this)" data-id="${todoArray[i]._id}" data-status="${todoArray[i].status}" >
            <i class="fa-sharp fa-regular fa-square${(todoArray[i].status == 1)? '-check' : ''} todo-item-checkbox"></i>
            <span class="todo-iten-date"> ${date.getDate() + '/' + date.getMonth() + '/'+date.getFullYear()} </span>
            <span class="todo-item-category category-${todoArray[i].category}"> ${todoArray[i].category} </span>
            <span class="todo-item-title"> ${todoArray[i].title} </span>
        </div>
        <i class="fa-solid fa-trash todo-item-delete" data-id="${todoArray[i]._id}"  onClick="deleteTodo(this)" ></i>
    `;
    todoList.append(element);
    }
}



// when click on delete button aside of todo-item gets the id and delete it from db
async function deleteTodo(element){
    id = element.dataset.id;
    await fetch(`http://localhost:8000/delete/${id}`, {method: "DELETE"});
    
    getTodos();
}


// when click on todo-item flip the status of todo-item i.e (check <-> uncheck)
async function changeStatus(element){
    const id = element.dataset.id;
    let status = element.dataset.status;

    if(status == 1){
        status = 0;
    }else{
        status = 1;
    }

    await fetch(`http://localhost:8000/change/${id}/status/${status}`, {method: "PATCH"})

    getTodos();
}