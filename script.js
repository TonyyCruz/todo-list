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
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else { event.target.classList.add('completed'); }
}

const clearAll = document.querySelector('#apaga-tudo');
clearAll.addEventListener('click', listClear);
function listClear() {
  let listLines = list.children.length;
  for (let i = 0; i < listLines; i += 1) {
    let remove = list.children[0];
    list.removeChild(remove);
  }
}

const concludedDell = document.querySelector('#remover-finalizados');
concludedDell.addEventListener('click', deleteConcluded);
function deleteConcluded() {
  let concluded = document.querySelectorAll('.completed');
  for (let i = 0; i< concluded.length; i += 1) {
    let dell = concluded[i];
    list.removeChild(dell);
  }
}