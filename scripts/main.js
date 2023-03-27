var myImage = document.querySelector('img');

myImage.onclick = function (){
    var mySrc = myImage.getAttribute('src');
    if (mySrc==='images/aviao_3.png'){
        myImage.setAttribute('src','images/aviao_4.jpg');
    } else {
        myImage.setAttribute('src','images/aviao_3.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Por favor insira o seu nome.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Aviões, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Aviões, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}