
let Juan = prompt('Juan, tuvo contacto con alguien con síntomas de covid?');
let Maria = prompt('Maria, tuvo contacto con alguien con síntomas de covid?');
let Jose = prompt('Jose, tuvo contacto con alguien con síntomas de covid?');

if ((Juan == 'si') || (Maria == 'si') || (Jose == 'si')) {
    alert('Como uno de ustedes tuvo contacto con alguien con sintomas, todos deberán hacer la cuarentena obligatoria.')
}else{
    alert('Si ninguno tuvo contacto con alguien con síntomas, puede seguir sus vidas normalmente')
}
