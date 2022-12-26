const controle = document.querySelectorAll('[data-controle]')   //arry

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const pesa = controle.querySelector('[data-contador]')
    if(operacao === '-') {
        pesa.value = parseInt(pesa.value) - 1
    }else {
        pesa.value = parseInt(pesa.value) + 1
    }
}
