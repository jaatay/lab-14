var picPaths = ['img/bag.jpg' , 'img/banana.jpg' , 'img/bathroom.jpg' , 'img/boots.jpg' ,'img/breakfast.jpg' , 'img/bubblegum.jpg' , 'img/chair.jpg' , 'img/cthulhu.jpg' , 'img/dog-duck.jpg' , 'img/dragon.jpg' , 'img/pen.jpg' , 'img/pet-sweep.jpg' , 'img/scissors.jpg' , 'img/shark.jpg','img/sweep.png' , 'img/tauntaun.jpg' , 'img/unicorn.jpg' , 'img/usb.gif' , 'img/water-can.jpg' , 'img/wine-glass.jpg'];
var picNames = ['bagPic' , 'bananaPic' , 'bathroomPic' , 'bootsPic' , 'breakfastPic' , 'bubblePic' , 'chairPic' , 'demonPic' , 'dogPic' , 'dragonPic','penPic' , 'petPic' , 'scissorsPic' , 'sharkPic' , 'sweepPic' , 'taunPic' , 'unicornPic' , 'usbPic' , 'canPic' , 'winePic'];
var allInfo = [];
var bagProduct = document.getElementById('bagPic');
var bananaProduct = document.getElementById('bananaPic');
var bootsProduct = document.getElementById('bootsPic');
var bathroomProduct = document.getElementById('bathroomPic');
var checkOut = document.getElementById('checkOut');

//Constructor and render method
function Picture(name, path){
    this.name = name;
    this.path = path;
    allInfo.push(this);
};

Picture.prototype.render = function(){
    var newLI = document.createElement('li');
    newLI.id = this.name
    newLI.innerHTML = '<img src=' + this.path + ' alt=' + this.name + '>';
    picSection.appendChild(newLI);
};

//Initial instance creation
var createStateOne = () =>{
   for (var i = 0; i < picNames.length; i++){
        var newName = picNames[i];
        var newName = new Picture(picNames[i] , picPaths[i]);
        newName.checkState = false;
   }
};

//localStorage functions
var storeThis = () =>{
    for (var i = 0; i <allInfo.length; i++){
        allClicks.push(allInfo[i].clickCount);
        }
    
    localStorage.setItem('clickInfo' , JSON.stringify(allClicks));
    localStorage.setItem('userName' , JSON.stringify(myName));
    console.log(allClicks);
};

var getThis = () =>{
    var newClicks = localStorage.getItem('clickInfo');
        myName = localStorage.getItem('userName');

    if(newClicks){
            allClicks = [];
            newClicks = JSON.parse(newClicks);
            console.log(newClicks);
            myName = JSON.parse(myName);
            intro.innerHTML = `Welcome back, ${myName}`;
            introBlurb.innerHTML = "You know what to do by now.";

            for (var i = 0; i < allInfo.length; i++){
                allInfo[i].clickCount = newClicks[i];
            } 

    } else {
            introFunction();
    }
    
};

//show end chart and store clicks function
checkOut.addEventListener('click' , () =>{
window.open("cart.html");
});

//Set state one
createStateOne();
