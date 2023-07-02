console.log("hello");
//console.dir(document);

var headerTitle = document.getElementById('header-title')
//console.log(headerTitle);

headerTitle.innerText = "yoyoyo"

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

var li = document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent = "kuch bhi li"
li[2].style.background = "green"

for(var i=0;i<li.length;i++){
li[i].style.fontWeight = "bold";
}