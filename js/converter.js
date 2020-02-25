
function getinput(){
    var x = document.getElementById("edittext").value;
    var usa = 0.012;
    var ind = 0.84;
    var chn = 0.083;
    var pak = 1.82;
    var aud = 0.018;
    var cad = 0.016;
    var decimal = 3;
    usa = (x*usa).toFixed(decimal);
    ind = (x*ind).toFixed(decimal);
    chn = (x*chn).toFixed(decimal);
    pak = (x*pak).toFixed(decimal);
    aud = (x*aud).toFixed(decimal);
    cad = (x*cad).toFixed(decimal);
    document.getElementById("testf").innerHTML = "<p>USA: <span>"+usa+"</span> Dollar</p><br>";
    document.getElementById("testf").innerHTML += "<p>INDIA: <span>"+ind+"</span> Dollar</p><br>";
    document.getElementById("testf").innerHTML += "<p>CHINA: <span>"+chn+"</span> Dollar</p><br>";
    document.getElementById("testf").innerHTML += "<p>PAKISTAN: <span>"+pak+"</span> Dollar</p><br>";
    document.getElementById("testf").innerHTML += "<p>AUSTRALIA: <span>"+aud+"</span> Dollar</p><br>";
    document.getElementById("testf").innerHTML += "<p>CANADA: <span>"+cad+"</span> Dollar</p><br>";
}
setInterval(getinput, 1000);
window.addEventListener("load", getinput, false);