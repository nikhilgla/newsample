// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
var itemList = document.querySelector('.items')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);
  localStorage.setItem(nameInput.value , emailInput.value);
  console.log(localStorage.getItem(nameInput.value));
  
  var li =document.createElement('li')
  li.className="item";
  li.appendChild(document.createTextNode(nameInput.value));
  li.appendChild(document.createTextNode(" "+emailInput.value));

  var delBtn =document.createElement('button')
  delBtn.className = "btndel delete";
  delBtn.appendChild(document.createTextNode('X'));
  li.appendChild(delBtn);


  itemList.appendChild(li)
}

// let myObj = {
//     name:"nikhil",
//     age:23
// };
// console.log(myObj);
// localStorage.setItem("nik1" , myObj);
// let myObj_forLS = JSON.stringify(myObj);
// console.log(myObj_forLS);
// localStorage.setItem("nik2" , myObj_forLS);

// let myObj_byLS = JSON.parse(localStorage.getItem('nik2'));
// console.log(myObj_byLS);

// Delete event
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
      
        var li = e.target.parentElement;
        itemList.removeChild(li);
        console.log(li);
        var n=li.firstElementChild.previousSibling.previousSibling;
        console.log(n);
        localStorage.removeItem(n)
    }
  }
