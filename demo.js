console.log("hello");
//console.dir(document);

var headerTitle = document.getElementById('header-title')
//console.log(headerTitle);

// headerTitle.innerText = "yoyoyo"

// var header = document.getElementById('main-header')
// header.style.borderBottom = "5px solid black"

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = "kuch bhi"
// items[2].style.background = "green"

// for(var i=0;i<items.length;i++){
// items[i].style.fontWeight = "bold";
// }

// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = "kuch bhi li"
// li[2].style.background = "green"

// for (var i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = "bold";
// }

// var header = document.querySelector('#header-title')
// header.innerText = "By query selector"

// var secondItem = document.querySelector('.list-group-item:nth-child(3)')
// secondItem.innerText = "hahahahha"
// secondItem.style.background = "green"

// var odd = document.querySelectorAll('li:nth-child(odd)')
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.background = "pink"
// }

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items')
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.background="#f4f4f4";
console.log(itemList.parentNode.parentNode);
// parentElement
//console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'3
//console.log(itemlist.parentElement.parentElement.parentElement)


// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children[1]);

// console.log(itemList.firstElementChild);

// console.log(itemList.lastElementChild);


// console.log(itemList.nextSibling);

// console.log(itemList.nextElementSibling);


// console.log(itemList.previousSibling);


// console.log(itemList.previousElementSibling);

// Create ELEMENT
// create a div
// var newDiv = document.createElement('div')

// newDiv.className = "hello";
// newDiv.id = "hello1"
// //create text node
// var newDivText = document.createTextNode("HEllo")
// newDiv.appendChild(newDivText)
// console.log(newDiv);

// var container = document.querySelector('header .container');

// var h1 = document.querySelector('header h1');
// // console.log(h1);

// container.insertBefore(newDiv , h1);

//add another item
// var newLi = document.createTextNode("HEllo")
// newLi.className = 'list-group-item';
// console.log(newLi);

// var itemList = document.querySelector('#items');
// var li= document.querySelector('.list-group-item');
// console.log(li);

// itemList.insertBefore( newLi, li);

//delete functionality