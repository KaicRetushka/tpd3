var day = true;
var fon = document.getElementsByTagName('body');
var zagolovok = document.getElementsByClassName('zagolovok');
var ocntext = document.getElementsByClassName('ocntext'); 
var circle = document.getElementById('circle')
var leadStranica = document.getElementById('leadStranica');
var sozdateli = document.getElementById('sozdateli');
var naz = document.getElementsByClassName('naz');
leadStranica.href = "index.html";
sozdateli.href = "sozdateli.html";
function smena(){
    if(day){
        fon[0].style.background = "black";
        day = false;
        for (let i = 0; i < ocntext.length; i++) {
            ocntext[i].style.color = "white";
        }
        for (let i = 0; i < zagolovok.length; i++) {
            zagolovok[i].style.color = "white";
        }
        for (let i = 0; i < naz.length; i++) {
            naz[i].style.color = "black";
            
        }
        document.getElementById('time').src = "img/timeBlack.png"
        document.getElementById('threepalki').src = "img/threepalkiBlack.png";
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
        for (let i = 0; i < zagolovok.length; i++) {
            zagolovok[i].style.color = "black";    
        }
        for (let i = 0; i < naz.length; i++) {
            naz[i].style.color = "white";   
        }
        document.getElementById('time').src = "img/time.png";
        document.getElementById('threepalki').src = "img/threepalki.png";
        circle.style.left = "1.37%";
        circle.style.background = "yellow";
        leadStranica.href = "index.html";
        sozdateli.href = "sozdateli.html";
    }
    
}