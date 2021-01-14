let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if ((numeros[i] % 2) ==0) {
        continue
        console.log(numeros[i] + ' Es par');
    }else {
        console.log(numeros[i] + ' Es impar');
    }    
}