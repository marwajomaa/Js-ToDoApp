// console.log(document.getElementById('button'));
const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener('click', () => {
  // event.preventDefault();
  var inputValue = document.getElementById('input').value;
  // console.log( inputValue);
  if(inputValue) {
    addItemsToDo(inputValue);
  document.getElementById('input').value='' ;
}
});

function deleteItem() {
var item = this.parentNode.parentNode;
// console.log(item);
var parent = item.parentNode;
// console.log(parent);
parent.removeChild(item)
}

function completed(){
  var item = this.parentNode.parentNode; //li
  // console.log(item);
  var parent = item.parentNode;   //ul
  // parent.removeChild(item);
  // target.insertBefore(item, target.childNodes[0]);
  // console.log(parent);
  var id = parent.id;      //todo
  // console.log(id);
  var target = (id === 'todo')? document.getElementById('done'):document.getElementById('todo');
  // console.log(target);
  // console.log(parent.removeChild(item))
  target.insertBefore(item, target.childNodes[0])


}

var addItemsToDo = (inputValue)=> {
  var todo = document.getElementById('todo');
  var li = document.createElement('li');
  li.textContent=inputValue;
 var buttons = document.createElement('div');
    buttons.classList.add('buttons');

  var deletebutton = document.createElement('button');
       deletebutton.classList.add('remove');
       deletebutton.textContent ='delete';
       deletebutton.addEventListener('click', deleteItem);

  var donebutton = document.createElement('button');
   donebutton.classList.add('done');
  donebutton.textContent =' done';
  donebutton.addEventListener('click', completed)
   buttons.appendChild(deletebutton);
   buttons.appendChild(donebutton);
   li.appendChild(buttons);
   todo.insertBefore(li, todo.childNodes[0]);
}
