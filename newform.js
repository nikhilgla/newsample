// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phNo = document.querySelector("#phNo")
var itemList = document.querySelector('.items')

myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   console.log(nameInput.value);
//   localStorage.setItem(nameInput.value , emailInput.value);
//   console.log(localStorage.getItem(nameInput.value));
  
//   var li =document.createElement('li')
//   li.className="item";
//   li.appendChild(document.createTextNode(nameInput.value));
//   li.appendChild(document.createTextNode(" "+emailInput.value));

//   var delBtn =document.createElement('button')
//   delBtn.className = "btndel delete";
//   delBtn.appendChild(document.createTextNode('X'));
//   li.appendChild(delBtn);

//   var insBtn =document.createElement('button')
//   insBtn.className = "btndel insert";
//   insBtn.appendChild(document.createTextNode('Ins'));
//   li.appendChild(insBtn);



//   itemList.appendChild(li)
// }

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

window.addEventListener('DOMContentLoaded', ()=>{
  axios.get('https://crudcrud.com/api/cdf2f06bef944d00a859223532fa44fb/appointmentData')
  .then((ele)=>{
    console.log(ele);

    for(var i=0;i<ele.data.length;i++){
      showOnScreen(ele.data[i]);
    }
  })
  .catch((err)=> {console.log(err);})

})

function showOnScreen(userObj){

  const childli =`<li class="item" id=${userObj.name}>${userObj.name}-${userObj.email}-${userObj.phNo}<button onclick=deleteExp('${userObj.name}') class="btn btndel btn-danger btn-sm float-right delete">X</button><button onclick=insertExp('${userObj.name}','${userObj.email}','${userObj.phNo}') class="btn btndel btn-success btn-sm float-right insert">Ins</button></li>`
  itemList.innerHTML=itemList.innerHTML + childli;

}

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);

  
let myObj = {
      name:nameInput.value,
      email:emailInput.value,
      phNo:phNo.value
  }
  axios.post('https://crudcrud.com/api/cdf2f06bef944d00a859223532fa44fb/appointmentData',myObj)
  .then((ele)=>{
    console.log(ele.data);
    showOnScreen(ele.data)
  })
  .catch((err)=> {console.log(err);})
  // localStorage.setItem(nameInput.value, JSON.stringify(myObj));
  //console.log(localStorage.getItem(nameInput.value));
  //console.log(JSON.parse(localStorage.getItem(desc.value)));

  


  resetForm();
}


function deleteExp(name){
  const cc = document.getElementById(name)
  //var li = cc.parentElement;
  itemList.removeChild(cc);
  localStorage.removeItem(name);
}
function insertExp(namee , emaill , phNoo){
  const cc = document.getElementById(namee)
  itemList.removeChild(cc);
  localStorage.removeItem(namee);
  nameInput.value = namee;
  emailInput.value = emaill;
  phNo.value= phNoo;
}

// reset the form
function resetForm() {
  nameInput.value = '';
  emailInput.value = '';
  phNo.value = '';
 }