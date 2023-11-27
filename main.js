


const nav = document.querySelector('.menu');
const abrir = document.querySelector('.open__bars');
const cerrar = document.querySelector('.close__bars');

abrir.addEventListener('click', () =>{
    nav.classList.add('active');
    abrir.classList.add('ocultar');
    cerrar.classList.add('mostrar');
})
cerrar.addEventListener('click', () =>{
    nav.classList.remove('active');
    abrir.classList.remove('ocultar');
    cerrar.classList.remove('mostrar');
})







function PATCH(){
    document.getElementById('PATCHS').style.display = 'flex';
    document.getElementById('LIBRERIAS').style.display = 'none';
    document.getElementById('VST').style.display = 'none';
}
function VST(){
    document.getElementById('PATCHS').style.display = 'none';
    document.getElementById('LIBRERIAS').style.display = 'none';
    document.getElementById('VST').style.display = 'flex';
}
function LIBRERIAS(){
    document.getElementById('PATCHS').style.display = 'none';
    document.getElementById('LIBRERIAS').style.display = 'flex';
    document.getElementById('VST').style.display = 'none';
}
function TODO(){
    document.getElementById('PATCHS').style.display = 'flex';
    document.getElementById('LIBRERIAS').style.display = 'flex';
    document.getElementById('VST').style.display = 'flex';
}


