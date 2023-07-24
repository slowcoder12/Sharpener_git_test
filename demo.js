console.log("Hello")
document.title = "DOM Practice";

const header = document.getElementById("header-title");
        header.style.border = "2px solid black";

const addTitle = document.getElementById("add-title");
        addTitle.style.fontWeight = "bold";
        addTitle.style.color = "green";

let thirdListItem = (document.getElementById("third-item"));
thirdListItem.style.backgroundColor = 'green';

let listItems = document.getElementById('items');
listItems.style.fontWeight = 'bold'

let li = document.getElementsByTagName("li")[4];
li.style.color = 'blue';
