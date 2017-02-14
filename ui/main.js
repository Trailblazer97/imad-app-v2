console.log('Loaded!');
//change the textof the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
//shistimage to rightbyadding left margin
var img=document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft='100px';
};