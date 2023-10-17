function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#CCBBAC'
    } else  if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#F59840'
    } else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#04397E'
        
    }
}    



