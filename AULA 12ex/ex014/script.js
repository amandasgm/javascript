function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var hora = 
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background ='#D7D0C9'
    }else if (hora > 12 && hora <= 18){
        //boa tarde 
        img.src = 'fototarde.png'
        document.body.style.background = '#BD7B4D'   
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#001A3D'
    }
        
}