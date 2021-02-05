// Suma

let enter = do
let btnSuma = document.getElementById('botonSuma').addEventListener('click', function () {
    let input1Suma = document.getElementById('input1Suma').value
    let input2Suma = document.getElementById('input2Suma').value
    let resultadoSuma = (parseInt(input1Suma) + parseInt(input2Suma));
    document.getElementById('resultadoSuma').innerHTML = `La suma da: ${resultadoSuma}`
})

// Resta
let btnResta = document.getElementById('botonResta').addEventListener('click', function () {
    let input1Resta = document.getElementById('input1Resta').value
    let input2Resta = document.getElementById('input2Resta').value
    let resultadoResta = (parseInt(input1Resta) - parseInt(input2Resta));
    document.getElementById('resultadoResta').innerHTML = `La resta da: ${resultadoResta}`
})

// Multiplicación
let btnMult = document.getElementById('botonMult').addEventListener('click', function () {
    let input1Mult = document.getElementById('input1Mult').value
    let input2Mult = document.getElementById('input2Mult').value
    let resultadoMult = (parseInt(input1Mult) * parseInt(input2Mult));
    document.getElementById('resultadoMult').innerHTML = `La multiplicación da: ${resultadoMult}`
})

// División
let btnDiv = document.getElementById('botonDiv').addEventListener('click', function () {
    let input1Div = document.getElementById('input1Div').value
    let input2Div = document.getElementById('input2Div').value
    let resultadoDiv = (parseInt(input1Div) / parseInt(input2Div));
    document.getElementById('resultadoDiv').innerHTML = `La división da: ${resultadoDiv}`
})