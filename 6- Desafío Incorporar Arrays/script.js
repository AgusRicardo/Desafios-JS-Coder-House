
let animalesDomesticos = [' Perro', ' Gato', ' Hámster', ' Pez'];
let animalesSalvajes = [' León', ' Tigre', ' Elefante', ' Hipopótamo', ' Jirafa'];
let todosLosAnimales = animalesDomesticos.concat(animalesSalvajes);

function valor1() { // Se muestra el primer array
    document.getElementById('carrito').innerHTML = `<b>${animalesDomesticos}</b>`
}
function valor2() { // Se muestra el segundo array
    document.getElementById('carrito').innerHTML = `<b>${animalesSalvajes}</b>`
}
function valor3(){ // Se concatenan y se muestran los dos arrays en uno
    document.getElementById('carrito').innerHTML = `<b>${todosLosAnimales}</b>`
}