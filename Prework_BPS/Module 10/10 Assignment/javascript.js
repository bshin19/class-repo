//box grow
document.getElementById("buttonGrow").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

//box turns blue
document.getElementById("buttonBlue").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

//box becomes transparent
document.getElementById("buttonFade").addEventListener("click", function(){

    document.getElementById("box").style.opacity = ".1";

});

//box resets
document.getElementById("buttonReset").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.opacity = "1";

});