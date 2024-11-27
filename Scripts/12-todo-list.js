const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name : 'aman',
  date : '2024-8-26'
  },{
    name : 'arman',
    date : '2024-7-26'
  },{
    name : 'gypsy',
    date : '2024-6-26'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
todoList.forEach((todoObject, index) => {
  
    const {name, date} = todoObject;
    
    const html = `
    <div>
      ${name} 
    </div>
    <div>
      ${date} 
    </div>
    
    <button class="delete-btn js-delete-btn">
      Delete
    </button>`;
    todoListHTML += html;
});



  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   const {name, date} = todoObject;
    
  //   const html = `
  //   <div>
  //     ${name} 
  //   </div>
  //   <div>
  //     ${date} 
  //   </div>
    
  //   <button onclick= '
  //     todoList.splice(${i},1);
  //     renderTodoList();
  //     saveToStorage();
  //     'class="delete-btn"
  //     >Delete
  //   </button>`;
  //   todoListHTML += html;
  // }
  // console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-btn').forEach((deleteBtn,index) => {
    deleteBtn.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
      saveToStorage();
    })
  })

}

document.querySelector('.js-add-btn').addEventListener('click',()=>{
    addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  
  todoList.push({name,date});
  // console.log(todoList);
  inputElement.value = '';
  renderTodoList();
  saveToStorage();
  

}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}