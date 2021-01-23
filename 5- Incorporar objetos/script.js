
class Pc {
    constructor(marcaPc, tipoPc, serialPc, precioProducto){
        this.marca = marcaPc;
        this.tipo = tipoPc;
        this.serial = serialPc;
        this.precio = precioProducto;
    }
}
function mostrarEnPantalla (){
    document.getElementById('carrito').innerHTML = `${primeraPc.tipo} 
    ${primeraPc.marca}<br> 
    Serial: ${primeraPc.serial} <br>
    Precio: ${primeraPc.precio}`;
}

let primeraPc = new Pc('Lenovo', 'Notebook', 123123123, '$75.000')
console.log(primeraPc);
