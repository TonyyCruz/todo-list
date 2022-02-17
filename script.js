const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearAll = document.querySelector('#apaga-tudo');
const concludedDell = document.querySelector('#remover-finalizados');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const deleteItem = document.querySelector('#remover-selecionado');

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

function addItensToSave() {
  for (let i = 0; i < list.children.length; i += 1) {
    let type = list.children[i];
    let item = list.children[i];
    localStorage.setItem(i, JSON.stringify([type.className, item.innerText]));
  }
}

function saveList() {
  localStorage.clear();
  addItensToSave();
}
salvarTarefas.addEventListener('click', saveList);

function moveCima2(selected) {
let sibling = selected.previousElementSibling;
selected.innerText = sibling.innerText;
selected.className = sibling.className;
selected.removeAttribute('id');
}

moveUp.addEventListener('click', moveCima);
function moveCima() {
  let selectedItem = document.querySelector('#selected-item');
  if (selectedItem !== null && selectedItem.previousElementSibling !== null) {
    let saveTxt = selectedItem.innerText;
    let saveClass = selectedItem.className;
    moveCima2(selectedItem);
    selectedItem.previousElementSibling.innerText = saveTxt;
    selectedItem.previousElementSibling.className = saveClass;
    selectedItem.previousElementSibling.id = 'selected-item';
  }
}

function moveBaixo2(selected) {
  let sibling = selected.nextElementSibling;
  selected.innerText = sibling.innerText;
  selected.className = sibling.className;
  selected.removeAttribute('id');
}

moveDown.addEventListener('click', moveBaixo);
function moveBaixo() {
  let selectedItem = document.querySelector('#selected-item');
  if (selectedItem !== null && selectedItem.nextElementSibling !== null) {
    let saveTxt = selectedItem.innerText;
    let saveClass = selectedItem.className;
    moveBaixo2(selectedItem);
    selectedItem.nextElementSibling.innerText = saveTxt;
    selectedItem.nextElementSibling.className = saveClass;
    selectedItem.nextElementSibling.id = 'selected-item';
  }
}

deleteItem.addEventListener('click', deletSelectedItem);
function deletSelectedItem() {
  let itemToDell = document.querySelector('#selected-item');
  list.removeChild(itemToDell);
}

window.onload = function () {
  function createListOfStorage(clas, text) {
    let li = document.createElement('li');
    li.innerText = text;
    if (clas !== '') {
      li.classList.add('completed');
    }
    list.appendChild(li);
  }

  function addListToStorage() {
    for (let i = 0; i < localStorage.length; i += 1) {
      let rCovr = localStorage[i];
      let rec = JSON.parse(rCovr);
      createListOfStorage(rec[0], rec[1]);
    }
  }
  addListToStorage();
};
