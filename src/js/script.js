const botoes = document.querySelectorAll('dangoBotao')

botoes.forEach(botao => {
    botao.addEventListener('mouseenter', () => {
        botao.style.backgroundColor = '#731F35'
    })

    botao.addEventListener('mouseleave', () => {
        botao.style.backgroundColor = '#59551E'
    })
})


const page = document.querySelectorAll('newpage')

botoes.forEach(page=> {
    page.addEventListener('mouseenter', () => {
        page.style.backgroundColor = '#A0BED9'
    })

    page.addEventListener('mouseleave', () => {
        page.style.backgroundColor = '#59551E'
    })
})