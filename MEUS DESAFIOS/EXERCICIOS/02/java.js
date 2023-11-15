function enviar(){
    let nome = document.getElementById('inome')
    let msg = document.getElementById('msg')
    
    if(nome.value.length == 0){
        alert('ERRO!')
    }else{
        msg.innerText = `Seja bem vindo, ${nome.value}`
    }
        
}