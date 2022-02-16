const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');


button.addEventListener('click', buttonToDoList);
function buttonToDoList() {
  if (input.value !== '') {
    console.log(input.value);
    let toDo = createListToDo();
    toDo.innerText = input.value;
    input.value = '';
  }
}

function createListToDo() {
  let li = document.createElement('li');
  li.classList.add('list-to-do');
  list.appendChild(li);
  return li;
}

