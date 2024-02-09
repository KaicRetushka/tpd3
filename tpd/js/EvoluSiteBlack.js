var day = false;
var fon = document.getElementsByTagName('body');
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
        document.getElementById('leadText').style.color = "black";
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
        document.getElementById('leadText').style.color = "white";
        circle.style.left = "1.37%";
        circle.style.background = "yellow";
        naz.href = "index.html"
        leadStranica.href = "index.html";
        sozdateli.href = "sozdateli.html";
    }
    
}