var body = document.querySelector('body');
var btnC = document.querySelector('button#contraste');
var btnL = document.querySelector('button#fontL');
var btnR = document.querySelector('button#fontR');
var btnP = document.querySelector('button#fontP');
var pElement = document.querySelectorAll('p');
var aElement = document.querySelectorAll('a');
var hElement = document.querySelectorAll('h3');
const pStyle = getComputedStyle(pElement[0]);
const aStyle = getComputedStyle(aElement[0]);
const hStyle = getComputedStyle(hElement[0]);
var pFontSize = parseInt(pStyle.fontSize);
var aFontSize = parseInt(aStyle.fontSize);
var hFontSize = parseInt(hStyle.fontSize);
const pFontSizeStatic = pFontSize;
const aFontSizeStatic = aFontSize;
const hFontSizeStatic = hFontSize;
const pFontSizeMax = 23;
const aFontSizeMax = 25;
const hFontSizeMax = 38;
const pFontSizeMin = 12;
const aFontSizeMin = 15;
const hFontSizeMin = 28;
var contraste = false;

btnC.onclick = () => {
    if (!contraste) {
        contraste = true;
        body.classList.add("contraste")
    } else if (contraste) {
        contraste = false;
        body.classList.remove("contraste");
    }
}

btnL.onclick = () => {
    if(pFontSize > pFontSizeMin) {
        pFontSize--;
        for(let i = 0; i < pElement.length; i++) {
            pElement[i].style.fontSize = pFontSize+'px'; 
        }
    }
    if(aFontSize > aFontSizeMin) {
        aFontSize--;
        for(let i = 0; i < aElement.length; i++) {
            aElement[i].style.fontSize = aFontSize+'px'; 
        }
    }
    if(hFontSize > hFontSizeMin) {
        hFontSize--;
        for(let i = 0; i < hElement.length; i++) {
            hElement[i].style.fontSize = hFontSize+'px'; 
        }
    }   
}

btnR.onclick = () => {
    pFontSize = pFontSizeStatic;
    aFontSize = aFontSizeStatic;
    hFontSize = hFontSizeStatic;
    for(let i = 0; i < pElement.length; i++) {
        pElement[i].style.fontSize = pFontSize+'px';
    }
    for(let i = 0; i < aElement.length; i++) {
        aElement[i].style.fontSize = aFontSize+'px'; 
    }
    for(let i = 0; i < hElement.length; i++) {
        hElement[i].style.fontSize = hFontSize+'px'; 
    }
}

btnP.onclick = () => {
    if(pFontSize < pFontSizeMax) {
        pFontSize++;
        for(let i = 0; i < pElement.length; i++) {
            pElement[i].style.fontSize = pFontSize+'px';
        }
    }
    if(aFontSize < aFontSizeMax) {
        aFontSize++;
        for(let i = 0; i < aElement.length; i++) {
            aElement[i].style.fontSize = aFontSize+'px'; 
        }
    }
    if(hFontSize < hFontSizeMax) {
        hFontSize++;
        for(let i = 0; i < hElement.length; i++) {
            hElement[i].style.fontSize = hFontSize+'px'; 
        }
    }
}