'use strict'

var picPaths = ['img/bag.jpg' , 'img/banana.jpg' , 'img/bathroom.jpg' , 'img/boots.jpg' ,'img/breakfast.jpg' , 'img/bubblegum.jpg' , 'img/chair.jpg' , 'img/cthulhu.jpg' , 'img/dog-duck.jpg' , 'img/dragon.jpg' , 'img/pen.jpg' , 'img/pet-sweep.jpg' , 'img/scissors.jpg' , 'img/shark.jpg','img/sweep.png' , 'img/tauntaun.jpg' , 'img/unicorn.jpg' , 'img/usb.gif' , 'img/water-can.jpg' , 'img/wine-glass.jpg'];
var picNames = ['bagPic' , 'bananaPic' , 'bathroomPic' , 'bootsPic' , 'breakfastPic' , 'bubblePic' , 'chairPic' , 'demonPic' , 'dogPic' , 'dragonPic','penPic' , 'petPic' , 'scissorsPic' , 'sharkPic' , 'sweepPic' , 'taunPic' , 'unicornPic' , 'usbPic' , 'canPic' , 'winePic'];
var allInfo = [];
var finalArray = [];

var bagProduct = document.getElementById('bagPic');
var bananaProduct = document.getElementById('bananaPic');
var bootsProduct = document.getElementById('bootsPic');
var bathroomProduct = document.getElementById('bathroomPic');
var saleReport = document.getElementById('reportSection');

var bagReport = document.getElementById('bagReport');
var bananaReport = document.getElementById('bananaReport');
var bootsReport = document.getElementById('bootsReport');
var bathroomReport = document.getElementById('bathroomReport');

var checkOutButton = document.getElementById('checkThis');
var submitThis = document.getElementsByClassName('submit');

//Constructor and render method
function Picture(name, path){
    this.name = name;
    this.path = path;
    this.productNumber = 0;
    this.checkState = false;
    allInfo.push(this);
};

Picture.prototype.render = function(){
    var newLI = document.createElement('li');
    newLI.id = this.name
    newLI.innerHTML = '<img src=' + this.path + ' alt=' + this.name + '>';
    picSection.appendChild(newLI);

    var newInfo = document.createElement('form');
    newLI.appendChild(newInfo);

    var newDrop = document.createElement('button');
    newDrop.class = 'dropbtn';
    newInfo.appendChild(newDrop);

    var newDiv = document.createElement('div');
    newDiv.class = 'dropdown-content';
    newDrop.appendChild(newDiv);

    var newInput = document.createElement('input');
    newInput.name = this.name;
    newInput.type = 'number';
    newDiv.appendChild(newInput);

};

//Initial instance creation
var createStateOne = () =>{
   for (var i = 0; i < picNames.length; i++){
        var newName = picNames[i];
        var newName = new Picture(picNames[i] , picPaths[i]);
   }
};

//localStorage functions
var storeThis = () =>{
   bagProduct = bagProduct.value;
   bananaProduct = bananaProduct.value;
   bootsProduct = bootsProduct.value;
   bathroomProduct = bathroomProduct.value;

    localStorage.setItem('bag' , JSON.stringify(bagProduct));
    localStorage.setItem('banana' , JSON.stringify(bananaProduct));
    localStorage.setItem('boots' , JSON.stringify(bootsProduct));
    localStorage.setItem('bathroom' , JSON.stringify(bathroomProduct));
    
};

var getThis = () =>{
    var newBag = localStorage.getItem('bag');
    var newBanana = localStorage.getItem('banana');
    var newBoots = localStorage.getItem('boots');
    var newBathroom = localStorage.getItem('bathroom');
        

    if(newBag || newBanana || newBoots || newBathroom){
            
            newBag = JSON.parse(newBag);
            newBanana = JSON.parse(newBanana);
            newBoots = JSON.parse(newBoots);
            newBathroom = JSON.parse(newBathroom);
            finalArray.push(thisnewBag);

            totalPage();
    } 
};

var totalPage = function(){
    var newP = document.createElement('p');
    newP.textContent = newBag;
    bagReport.appendChild(newP);

    var newP2 = document.createElement('p');
    newP2.textContent = newBanana;
    bananaReport.appendChild(newP2);

    var newP3 = document.createElement('p');
    newP3.textContent = newBoots;
    bootsReport.appendChild(newP3)

    var newP4 = document.createElement('p');
    newP4.textContent = newBathroom;
    bathroomReport.appendChild(newP4);
};

var switchPage = function(){
    storeThis();
    window.open('cart.html');
    getThis();
};

//Set state one
createStateOne();
checkOutButton.addEventListener('click', switchPage);
