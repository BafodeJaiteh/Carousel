"use strict";

const button = document.querySelector(".button");

const li= document.querySelectorAll("li");

let position = 0;

function nextImage() {
    position++;
    if (position == li.length) {
        position= 0;
    }

    for(let i=0 ; i< li.length;i++){
    li[i].classList.remove("active");
}
li[position].classList.add("active");

}

button.addEventListener ("click",nextImage);

