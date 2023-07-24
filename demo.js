console.log("Hello")
document.title = "DOM Practice";

const header = document.getElementById("header-title");
        header.style.border = "2px solid black";

const addTitle = document.getElementById("add-title");
        addTitle.style.fontWeight = "bold";
        addTitle.style.color = "green";

// let thirdListItem = (document.getElementById("third-item"));
// thirdListItem.style.backgroundColor = 'green';

let listItems = document.getElementById('items');
listItems.style.fontWeight = 'bold'

let li = document.getElementsByTagName("li")[4];
li.style.color = 'blue';

// let secondItem= document.querySelector('#items li:nth-child(2)');
// secondItem.style.backgroundColor ='green';

//document.querySelector('#third-item').style.display = 'none';

var secondItem = document.querySelectorAll('#items li')[1];
    secondItem.style.color = 'green';

    var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
    for (var i = 0; i < oddItems.length; i++) {
      oddItems[i].style.backgroundColor = 'green';
    }
