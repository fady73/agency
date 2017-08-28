// get details from html dom and search by id
var details =document.getElementById('detail');

/* this function take no argrument and
   it display the div called detail */
function show(){
    // change display style from none to block
    details.style.display='block';
}

/* this function take no argrument and
   it hidden the div called detail */
function hide(){
    // change display style from block to none
    details.style.display='none';
}
