// Capturado botones

var botonLeft = document.querySelector("#menuAlineacion_left");
var botonCenter = document.querySelector("#menuAlineacion_center");
var botonRight = document.querySelector("#menuAlineacion_right");
var botonHide = document.querySelector("#menuAlineacion_hide");

//capturando miAside

var miAside = document.querySelector('.miAside');


//capturando evento botones:click

//boton izquierdo

botonLeft.addEventListener('click', function (event) {
    miAside.classList.remove('flex-last','invisible','transitions2','transitions1','col-md-12');

    if (!miAside.classList.contains('flex-first')) {
        miAside.classList.add('flex-first');
    }
    miAside.classList.add('transitions1');
    console.log(miAside);
});

//boton centro
botonCenter.addEventListener('click', function (event) {
    miAside.classList.remove('flex-last', 'invisible','transitions','transitions1');
    if (!miAside.classList.contains('col-md-12')) {
        miAside.classList.add('col-md-12','flex-first');
    }else{
        miAside.classList.remove('col-md-12', 'flex-first');
    }
    miAside.classList.add('transitions2');
    console.log(miAside);
});

//boton derecho

botonRight.addEventListener('click', function (event) {
    miAside.classList.remove('flex-first', 'invisible', 'col-md-12','transitions2','transitions1');
    if (!miAside.classList.contains('flex-last')) {
        miAside.classList.add('flex-last');
    }
    miAside.classList.add('transitions');
});

//boton hide
botonHide.addEventListener('click', function (event) {

    miAside.classList.remove('flex-first', 'flex-last','transitions','transitions1');
    if (miAside.classList.contains('invisible')) {
        miAside.classList.remove('invisible');
    } else {
        miAside.classList.add('invisible');
    }
    console.log(miAside);
});