'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('cor-apto', 'cor-nao-apto')
}

function avaliar() {
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    if (tempo.value < 14) {
        resultado.textContent = 'Apto'
        removerClasses()
        resultado.classList.add('cor-apto')
    } else {
        resultado.textContent = 'Não apto'
        removerClasses()
        resultado.classList.add('cor-nao-apto')
    }
}