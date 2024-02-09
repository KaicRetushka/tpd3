var day = false;
var fon = document.getElementsByTagName('body');
var zagolovok = document.getElementsByClassName('zagolovok');
var ocntext = document.getElementsByClassName('ocntext'); 
var circle = document.getElementById('circle');
var leadStranica = document.getElementById('leadStranica');
var AllSite = document.getElementById('AllSite');
var EvoluSite = document.getElementById('EvoluSite');
var FirstSite = document.getElementById('FirstSite');
var sozdateli = document.getElementById('sozdateli');
var naz = document.getElementsByClassName('naz');
leadStranica.href = "indexBlack.html";
FirstSite.href = "FirstSiteBlack.html"
EvoluSite.href = "EvoluSiteBlack.html";
AllSite.href = "AllSiteBlack.html";
sozdateli.href = "sozdateliBlack.html";

function smena(){
    if(day){
        fon[0].style.background = "black";
        day = false;
        location.href = "index.html"
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
        document.getElementById('leadText').style.color = "black";
        document.getElementById("cllead").style.color = "black";
        circle.style.left = "3.6%";
        circle.style.background = "#CFCFCF";
        leadStranica.href = "indexBlack.html";
        FirstSite.href = "FirstSiteBlack.html"
        AllSite.href = "AllSiteBlack.html"
        EvoluSite.href = "EvoluSiteBlack.html";
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
        document.getElementById('leadText').style.color = "white";
        document.getElementById("cllead").style.color = "white";
        circle.style.left = "1.37%";
        circle.style.background = "yellow";
        leadStranica.href = "index.html";
        FirstSite.href = "FirstSite.html";
        EvoluSite.href = "EvoluSite.html";
        AllSite.href = "AllSite.html";
        sozdateli.href = "sozdateli.html";
    }
}