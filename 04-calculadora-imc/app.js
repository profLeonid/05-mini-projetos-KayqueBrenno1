'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo-peso', 'peso-normal', 'sobrepeso', 'grau1', 'grau2', 'grau3')
}

function calcularIMC() {
    const nome = String(document.getElementById('nome').value)
    const altura = Number(document.getElementById('altura').value)
    const peso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    const imc = (peso / (altura ** 2)).toFixed(2)
    let classificacao

    if(imc < 18.5){
        resultado.classList.add('abaixo-peso')
        classificacao = 'abaixo do peso'
    } else if(imc >= 18.5 && imc < 25){
        resultado.classList.add('peso-normal')
        classificacao = 'peso normal'
    } else if(imc >= 25 && imc < 30) {
        resultado.classList.add('sobrepeso')
        classificacao = 'sobrepeso'
    } else if(imc >= 30 && imc < 35){
        resultado.classList.add('grau1')
        classificacao = 'obesidade grau I'
    } else if(imc >= 35 && imc < 40){
        resultado.classList.add('grau2')
        classificacao = 'obesidade grau II'
    } else{
        resultado.classList.add('grau3')
        classificacao = 'obesidade grau III'
    }

    resultado.textContent = `O IMC de ${nome} é ${imc} portanto, ${classificacao}`
}