// var items = document.getElementsByClassName('list-group-item');
//    console.log(items);
//    console.log(items[1]);
//    items[1].textContent="VAibhav";
//    items[1].style.backgroundColor='green';
//    items[1].style.fontWeight='bold';
//    items[2].style.fontWeight='bold';
//    items[3].style.fontWeight='bold';
//    items[0].style.fontWeight='bold';

// var li=document.getElementsByTagName('li');
// li[1].style.backgroundColor='green';
//  for(var i=0;i<li.length;i++)
//  {
//    li[i].style.fontWeight='bold';
//  }

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';

// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display='none';


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

