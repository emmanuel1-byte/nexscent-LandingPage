"use strict";
const openIcon =  document.getElementById('nav-icon');
const closeIcon = document.getElementById("nav-iconClose");
const nav = document.getElementById('c2');
function open(){
    nav.style.display="flex";
  
}

function close(){
    nav.style.display="none";
  
}

openIcon.addEventListener("click", open);
closeIcon.addEventListener("click", close);
