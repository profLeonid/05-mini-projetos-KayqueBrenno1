'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
}

function calcularMedia() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const resultado = document.getElementById('resultado')

    const somarNotas = nota1 + nota2 + nota3
    const media = (somarNotas / 3).toFixed(2)
    let status

    removerClasses()
    if (media < 5) {
        resultado.classList.add('reprovado')
        status = 'reprovado'
    } else if (media >= 5 && media < 7) {
        resultado.classList.add('recuperacao')
        status = 'recuperacao'
    } else {
        resultado.classList.add('aprovado')
        status = 'aprovado'
    }

    resultado.textContent = `A média do aluno(a) é ${media}, ele está ${status}.`
}