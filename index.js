// // var items = document.getElementsByClassName('list-group-item');
// //    console.log(items);
// //    console.log(items[1]);
// //    items[1].textContent="VAibhav";
// //    items[1].style.backgroundColor='green';
// //    items[1].style.fontWeight='bold';
// //    items[2].style.fontWeight='bold';
// //    items[3].style.fontWeight='bold';
// //    items[0].style.fontWeight='bold';

// // var li=document.getElementsByTagName('li');
// // li[1].style.backgroundColor='green';
// //  for(var i=0;i<li.length;i++)
// //  {
// //    li[i].style.fontWeight='bold';
// //  }

// // var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// // seconditem.style.backgroundColor='green';

// // var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// // thirditem.style.display='none';


// var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);


// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// var filter = document.getElementById('filter');
// filter.addEventListener('keyup', filterItems);
// // Filter Items
// function filterItems(e){
//    // convert text to lowercase
//    var text = e.target.value.toLowerCase();
//    // Get lis
//    var items = itemList.getElementsByTagName('li');
//    // Convert to an array
//    Array.from(items).forEach(function(item){
//      var itemName = item.firstChild.textContent;
//      if(itemName.toLowerCase().indexOf(text) != -1){
//        item.style.display = 'block';
//      } else {
//        item.style.display = 'none';
//      }
//    });
//  }

//  user data stores onmlocal storage
let form=document.querySelector('#addForm');
let itemform=document.querySelector('#item');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
   e.preventDefault();
  console.log(itemform.value);

  if(itemform.value ==="")
  {
    alert("Please Fill Details");
  }
  else{
    const li=document.createElement('li');
    li.appendChild(document.textContent(itemform.value));
    li.className = 'list-group-item';
    itemList.appendChild(li);
  }

};
;