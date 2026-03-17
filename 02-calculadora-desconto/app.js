'use strict'

const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

const calcularPrecoFinal = (preco, valorEconomizado) => preco - valorEconomizado

function selecionarCor (desconto) {
    if (desconto <= 5)
        return 'desconto1'
    else if (desconto <= 10)
        return 'desconto2'
    else
        return 'desconto3'
}

function removerClasse() {
    document.getElementById('resultado')
        .classList.remove('desconto1', 'desconto2', 'desconto3')
}

function handleClick () {
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado)
    const cor = selecionarCor(desconto)

    removerClasse()
    resultado.textContent = `${valorEconomizado} | ${precoFinal}`
    resultado.classList.add(cor)
}

/*function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('ate', 'entre', 'acima')
}

function calcularDesconto() {
    const preco = document.getElementById('preco')
    const percentual = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    const decimal = percentual.value / 100

    removerClasses()
    if (percentual.value <= 5)
        resultado.classList.add('ate')
    else if (percentual.value > 5 && percentual.value < 10)
        resultado.classList.add('entre')
    else
        resultado.classList.add('acima')

    let valorFinal = (preco.value - (preco.value * decimal)).toFixed(2)
    let valorEconomizado = (preco.value * decimal).toFixed(2)

    resultado.textContent = `Valor economizado: ${valorEconomizado} - Valor final: ${valorFinal}`
} */