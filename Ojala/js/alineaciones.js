// Capturado botones

var botonLeft = document.querySelector("#menuAlineacion_left");
var botonCenter = document.querySelector("#menuAlineacion_center");
var botonRight = document.querySelector("#menuAlineacion_right");
var botonHide = document.querySelector("#menuAlineacion_hide");

//capturando miAside

var miAside = document.querySelector('.miAside');


//capturando evento botones:click

botonLeft.addEventListener('click', function (event) {

    if (!miAside.classList.contains('flex-first')) {
        // console.log(miAside.classList.contains('flex-first'));
        miAside.classList.add('flex-first');
    } 

});

botonCenter.addEventListener('click', function (event) {
    alert("Le diste click al boton centro");
});

botonRight.addEventListener('click', function (event) {
    
    alert("Le diste click al boton derecho");
});

botonHide.addEventListener('click', function (event) {
    alert("Le diste click al boton de esconder");
});