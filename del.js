var form = document.getElementById('addForm')
var delete_li = document.getElementById('items');
var new_li = document.getElementById('items');
form.addEventListener('submit', addnewLi)
delete_li.addEventListener('click',deleteItem)

//function to delete item

function deleteItem(e) {
    if (e.target.classList.contains('delete')){
        if(confirm('are you sure to delete item')){
            var li = e.target.parentElement;
            console.log(li)
            delete_li.removeChild(li);
            

        }
    }

}

function addnewLi(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deletebtn = document.createElement('button');
    var editbtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    editbtn.className = 'btn btn-danger btn-sm float-right edit'

    deletebtn.appendChild(document.createTextNode('X'));
    editbtn.appendChild(document.createTextNode('edit'));

    li.appendChild(deletebtn);
    li.appendChild(editbtn);

    new_li.appendChild(li);

}



   


