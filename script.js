const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const concludedDell = document.querySelector('#remover-finalizados');
const salvarTarefas = document.querySelector('#salvar-tarefas');

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

clearAll.addEventListener('click', listClear);
function listClear() {
  let listLines = list.children.length;
  for (let i = 0; i < listLines; i += 1) {
    let remove = list.children[0];
    list.removeChild(remove);
  }
}

concludedDell.addEventListener('click', deleteConcluded);
function deleteConcluded() {
  let concluded = document.querySelectorAll('.completed');
  for (let i = 0; i< concluded.length; i += 1) {
    let dell = concluded[i];
    list.removeChild(dell);
  }
}

function addItensToSave(itens) {
  for (let i = 0; i < list.children.length; i += 1) {
    itens.push(list.children[i].innerHTML);
  }
  return itens;
}

function saveList() {
  localStorage.clear();
  // if (localStorage.getItem('lista-tarefas') !== null) {
  // }
  localStorage.setItem('lista-tarefas', JSON.stringify([]));
  let storage = JSON.parse(localStorage.getItem('lista-tarefas'));
  let storageContents = addItensToSave(storage);
  localStorage.setItem('lista-tarefas', JSON.stringify(storageContents));
  console.log(storageContents);
}
salvarTarefas.addEventListener('click', saveList);

function replenishStorage() {
  let replenish = JSON.parse(localStorage.getItem('lista-tarefas'));

  console.log(replenish);
}
window.onload = replenishStorage;
