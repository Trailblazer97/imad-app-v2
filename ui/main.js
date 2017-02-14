console.log('Loaded!');
//change the textof the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
//shistimage to rightbyadding left margin
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
marginLeft=marginLeft + 1;
img.style.marginLeft=marginLef + 'px';
}

img.onclick = function(){
   var move=setInterval(moveRight,50);
};