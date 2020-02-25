// =============OnClick Option Bar======================
function openNav(){
    var x = document.getElementById("myNav");
    if(x.className === "nav"){
        x.className += " responsive";
    } else{
        x.className = "nav";
    }
}
function closeNav(){
    var x = document.getElementById("myNav");
    x.className = "nav";
}
function makeActive(evt){
    var x = document.getElementsByClassName("menuitem");
    var i;
    for(i=0;i<x.length;i++){
       x[i].className = x[i].className.replace(" active","");
    }
    evt.currentTarget.className += " active";
    closeNav();
}