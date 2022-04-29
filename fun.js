let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete items
itemList.addEventListener('click', removeItem);

// Filter items
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li item
    let li = document.createElement('li');

    // Adding class to li
    li.className = 'list-group-item';

    // Append child
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    let deleteBtn = document.createElement('button');

    // Add class to delete Button
    deleteBtn.className = 'btn btn-danger btn-sm delete';

    // Append delete-btn
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure u want to delete?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){

    // convert uppercase to lowercase
    let text = e.target.value.toLowerCase();

    // get li's
    let items = itemList.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });

}