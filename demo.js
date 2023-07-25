// console.log("Hello")
// document.title = "DOM Practice";

// const header = document.getElementById("header-title");
//         header.style.border = "2px solid black";

// const addTitle = document.getElementById("add-title");
//         addTitle.style.fontWeight = "bold";
//         addTitle.style.color = "green";

// // let thirdListItem = (document.getElementById("third-item"));
// // thirdListItem.style.backgroundColor = 'green';

// let listItems = document.getElementById('items');
// listItems.style.fontWeight = 'bold'

// let li = document.getElementsByTagName("li")[4];
// li.style.color = 'blue';

// // let secondItem= document.querySelector('#items li:nth-child(2)');
// // secondItem.style.backgroundColor ='green';

// //document.querySelector('#third-item').style.display = 'none';

// var secondItem = document.querySelectorAll('#items li')[1];
//     secondItem.style.color = 'green';

//     var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
//     for (var i = 0; i < oddItems.length; i++) {
//       oddItems[i].style.backgroundColor = 'green';
//     }


// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
   //parentNode
   console.log(itemList.parentNode);
   itemList.parentNode.style.backgroundColor = '#f4f4f4';
   console.log(itemList.parentNode.parentNode.parentNode);

   //parentElement
   console.log(itemList.parentElement);
   itemList.parentElement.style.backgroundColor = '#f4f4f4';
   console.log(itemList.parentElement.parentElement.parentElement);

   //childNodes

   console.log(itemList.childNodes);

   console.log(itemList.children);
   console.log(itemList.children[1]);
   itemList.children[1].style.backgroundColor=  'yellow';

   //FirstChild
   console.log(itemList.firstChild);
   // firstElementChild
   console.log(itemList.firstElementChild);
   itemList.firstElementChild.textContent =  'Hello 1';


   //lastChild
   console.log(itemList.lastChild);
   //lastElementChild
   console.log(itemList.lastElementChild);
   itemList. lastElementChild. textContent = 'Hello 4';

   //nextSibling
   console.log(itemList.nextSibling);
 //nextElementsibling
 console.log(itemList. nextElementSibling);
//previousSibling
//
 console. log(itemList.previousSibling);
//previousElementSibling
console. log(itemList.previousElementSibling);
itemList. previousElementSibling.style. color = 'green';


// create element

// create a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';

//add id

newDiv.id = 'hello1';

//add attribute

newDiv.setAttribute('title','Hello Div');

// create text node

var newDivText = document.createTextNode("Hello World");

//add text to div

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);


// assignment


var headerTitle = document.getElementById('header-title');

var helloTextNode = document.createTextNode('Hello word ');

headerTitle.parentNode.insertBefore(helloTextNode, headerTitle);




var itemList = document.getElementById('items');

var newListItem = document.createElement('li');


var helloTextNode = document.createTextNode('Hello word ');

newListItem.appendChild(helloTextNode);


var firstListItem = itemList.firstElementChild;


itemList.insertBefore(newListItem, firstListItem);





   








