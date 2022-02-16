const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');


button.addEventListener('click', buttonToDoList);
function buttonToDoList() {
  if (input.value !== '') {
    let toDo = createListToDo();
    toDo.innerText = input.value;
    input.value = '';
  }
}

function createListToDo() {
  let li = document.createElement('li');
  list.appendChild(li);
  return li;
}

list.addEventListener('click', selectedItemColor);
function selectedItemColor(event) {
  removeId();
  event.target.id = 'selected-item';
}

function removeId() {
  if (document.querySelector('#selected-item') !== null) {
    document.querySelector('#selected-item').removeAttribute('id');
  }
}

list.addEventListener('dblclick', lineThrough)
function lineThrough(event) {
  // let lineTest = throughTest(event.target)
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else { event.target.classList.add('completed'); }
}

// function throughTest(test) {
//   if (test.target.style.textDecoration === 'line-through') {
//     test.classList.remove('completed');
//   } else { test.classList.add('completed'); }
// }
