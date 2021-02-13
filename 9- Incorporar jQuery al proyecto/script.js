
$('button').click (function () {
    let inputNombre = $('#inputNombre').val();
    let inputApellido = $('#inputApellido').val();
    let inputEdad = $('#inputEdad').val();
    console.log(inputNombre);
    console.log(inputApellido);
    console.log(inputEdad);
    if (inputEdad >= 18) {
        $("#parrafo").html('<h3>Bienvenido '+inputNombre+'</h3>'+'<br/>'+'Nombre: '+inputNombre+ `<br/>`+'Apellido: ' +inputApellido+`<br/>`+'Edad: '+inputEdad);
    }else {
        $("#parrafo").html('Perdón '+inputNombre+', pero no podes pasar')
    }
})