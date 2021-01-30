
aux = '';
let btn = document.getElementById('boton').addEventListener('click', function(){
    let nombre = document.getElementById('ing_nombre').value;
    document.getElementById('respuesta').innerHTML = aux
    aux +=`<h1>Bienvenido ${nombre}</h1>`;
})