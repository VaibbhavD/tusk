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

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
   odd[i].style.backgroundColor='green';
}

var second=document.querySelectorAll('li')[1];
second.style.color='green';
// console.log(second);