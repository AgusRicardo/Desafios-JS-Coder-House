
let boton1 = 100;
let boton2 = 200;
let total = 0;


function valor1() {
    total = total + boton1;
    document.getElementById('carrito').innerHTML = `Has donado: <b>$${total}</b>`
    return(boton1)
}

function valor2() {
    total = total + boton2;
    document.getElementById('carrito').innerHTML = `Has donado: <b>$${total}</b>`
    return(boton2)
}


// Otra forma mas simple de resolverlo

// let boton1 = 100;
// let boton2 = 200;
// let total = 0;
// function valor1() {
//     mostrarResultado(boton1)
// }
// function valor2() {
//     mostrarResultado(boton2)
// }
// function mostrarResultado(valor){
//     total = total + valor
//     document.getElementById('carrito').innerHTML = `<b>${total}</b>`
// }