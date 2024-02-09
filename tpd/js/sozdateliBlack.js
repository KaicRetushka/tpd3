var one = document.getElementsByClassName("one");
var two = document.getElementsByClassName("two");
var three = document.getElementsByClassName("three");
console.log(one);
one[0].style.zIndex = 2;
one[1].style.zIndex = 2;
one[2].style.zIndex = 2;


setInterval(function(){
    if (one[0].style.zIndex == 2) {
        one[0].style.zIndex = 0;
        two[0].style.zIndex = 2;
        three[0].style.zIndex = 1;
    }

    else if (one[0].style.zIndex == 0){
        one[0].style.zIndex = 1;
        one[0].style.zIndex = 1;
        two[0].style.zIndex = 0;
        three[0].style.zIndex = 2;
    }

    else{
        one[0].style.zIndex = 2;
        two[0].style.zIndex = 1;
        three[0].style.zIndex = 0;
    }
}, 3000);

setInterval(function(){
    if (one[1].style.zIndex == 2) {
        one[1].style.zIndex = 0;
        two[1].style.zIndex = 2;
        three[1].style.zIndex = 1;
    }

    else if (one[1].style.zIndex == 0){
        one[1].style.zIndex = 1;
        one[1].style.zIndex = 1;
        two[1].style.zIndex = 0;
        three[1].style.zIndex = 2;
    }

    else{
        one[1].style.zIndex = 2;
        two[1].style.zIndex = 1;
        three[1].style.zIndex = 0;
    }
}, 3000);

setInterval(function(){
    if (one[2].style.zIndex == 2) {
        one[2].style.zIndex = 0;
        two[2].style.zIndex = 2;
        three[2].style.zIndex = 1;
    }

    else if (one[2].style.zIndex == 0){
        one[2].style.zIndex = 1;
        one[2].style.zIndex = 1;
        two[2].style.zIndex = 0;
        three[2].style.zIndex = 2;
    }

    else{
        one[2].style.zIndex = 2;
        two[2].style.zIndex = 1;
        three[2].style.zIndex = 0;
    }
}, 3000);



var day = false;
var fon = document.getElementsByTagName('body');
var zagolovok = document.getElementById('zagolovok');
var ocntext = document.getElementsByClassName('ocntext'); 
var leadStranica = document.getElementById('leadStranica');
var sozdateli = document.getElementById('sozdateli');
var naz = document.getElementsByClassName('naz');
leadStranica.href = "indexBlack.html";
sozdateli.href = "sozdateliBlack.html";
function smena(){
    if(day){
        fon[0].style.background = "black";
        day = false;
        for (let i = 0; i < ocntext.length; i++) {
            ocntext[i].style.color = "white";
        }
        for (let i = 0; i < naz.length; i++) {
            naz[i].style.color = "black";
            
        }
        document.getElementById('time').src = "img/timeBlack.png"
        document.getElementById('threepalki').src = "img/threepalkiBlack.png";
        zagolovok.style.color = "white";
        circle.style.left = "3.6%";
        circle.style.background = "#CFCFCF";
        leadStranica.href = "indexBlack.html";
        sozdateli.href = "sozdateliBlack.html";
    }
    else{
        fon[0].style.background = "white";
        day = true;
        for (let i = 0; i < ocntext.length; i++) {
            ocntext[i].style.color = "black";
        }
        for (let i = 0; i < naz.length; i++) {
            naz[i].style.color = "white";   
        }
        document.getElementById('time').src = "img/time.png";
        document.getElementById('threepalki').src = "img/threepalki.png";
        zagolovok.style.color = "black";
        circle.style.left = "1.37%";
        circle.style.background = "yellow";
        naz.href = "index.html"
        leadStranica.href = "index.html";
        sozdateli.href = "sozdateli.html";
    }
    
}