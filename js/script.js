var banner = document.querySelector(".banner");
var  black = document.querySelector(".black");
var white = document .querySelector(".white");
var cont = document.querySelector(".container");

var index =0 ;
var black =false;

 for ( var i=1; i <= 64; i++){
 var  add = document.createElement("div");
 if (black){
     add.classList.add("add");
     add.classList.add("black");
     index++;
     black=!black;
 }else{
    add.classList.add("add");
    add.classList.add("white");
    index++;
    black=!black;
 }
     banner.appendChild(add);


if (index === 8){
    black=!black;
    index=0;}
}