// // parentNode
const items=document.querySelector('#items')
// console.log(items);

console.log(items.parentNode);
// items.parentNode.style.backgroundColor='pink';
// console.log(items.parentNode.parentNode.parentNode.parentNode);

// //parentElement
console.log(items.parentElement);

// // chilsNodes
// console.log(items.childNodes);


// console.log(items.children);

// firstChild
// console.log(items.firstChild);

// firstchildelement
// console.log(items.firstElementChild);

// Lastelement Child
// console.log(items.lastElementChild);

// // nextsibling
// console.log(items.nextSibling);

// nextElementSibling
// console.log(items.nextElementSibling);

// previouselementsibling
// console.log(items.previousElementSibling)

// createWelement
// div
var newdiv=document.createElement('div');

// addclass
newdiv.className='hello';

// addId and title
newdiv.id='hello1';
newdiv.title="Hello World";

// create txt Node
var divtxt=document.createTextNode('Helloe World');

// text to div
newdiv.appendChild(divtxt)

// console.log(newdiv);

// add before head
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);

// a
var subit=document.querySelector('.btn-dark');
console.log(subit);
subit.style.backgroundColor='red';

// delete event
var itemlist =document.getElementById('items');
itemlist.addEventListener('click',removeitem); 

// create delete element
var deletebut=document.createElement('button');

// deletebut.className=