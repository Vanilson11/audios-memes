const teclas = document.querySelectorAll('[data-som]')

function tocaSom(dataElemento){
    const sound = document.querySelector(dataElemento)
    if(sound != null && sound.localName === 'audio'){
        sound.play()
    } else{
        console.log('desculpe, elemento não encontrado')
    }
}

teclas.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        console.log(evento.target.dataset.som)
        const tecla = evento.target.dataset.som
        const som = `.som__${tecla}`
        tocaSom(som)
    })

    /*elemento.onkeydown = (evento) =>{
        if(evento.code === 'Space' || evento.code === 'Enter'){
            elemento.classList.add('ativa')
        }
    }

    elemento.onkeyup = (evento) => {
        elemento.classList.remove('ativa')
    }*/
})