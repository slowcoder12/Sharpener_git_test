var form = document.getElementById('addForm')
var new_li = document.getElementById('items');
var filter = document.getElementById('filter')



form.addEventListener('submit', addnewLi);
new_li.addEventListener('click',deleteItem);
filter.addEventListener('keyup',filterItems);

//function to delete item

function deleteItem(e) {
    if (e.target.classList.contains('delete')){
        if(confirm('are you sure to delete item')){
            var li = e.target.parentElement;
            console.log(li)
            new_li.removeChild(li);
            

        }
    }

}

function addnewLi(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var descrip = document.getElementById('description').value;

    descrip = " " + descrip;
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(descrip));

    var deletebtn = document.createElement('button');
    var editbtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    editbtn.className = 'btn btn-danger btn-sm float-right edit'

    deletebtn.appendChild(document.createTextNode('X'));
    editbtn.appendChild(document.createTextNode('edit'));

    li.appendChild(deletebtn);
    li.appendChild(editbtn);

    new_li.appendChild(li);
    //new_li.appendChild(li);

}

function filterItems(e){

    var searchText = document.getElementById('filter').value.toLowerCase();
    //console.log(searchText);
    var items = document.getElementById('items').getElementsByTagName('li')
    //console.log(items);

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemDescription = item.childNodes[1].textContent.trim();
       
       // console.log(itemName);
       if(itemName.toLowerCase().indexOf(searchText) != -1 || itemDescription.toLowerCase().indexOf(searchText) !== -1 ) {
        item.style.display = "block";
    }
        else {
            item.style.display = "none";
        }
    });
}






   


