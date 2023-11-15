function verificar (){
    var n = document.getElementById('#num')
    var msg = document.getElementById('#msg')
    
    if(n.value.length == 0){
       msg.innerHTML = 'Erro! Digite uma opção valida' 
    } else {
        var n = Number(n.value)
        var tabuada='';

        for(var c=1; c<=10 ; c++){
            tabuada += `${n} x ${c} = ${n * c} <br>`
            msg.innerHTML = (tabuada)
        }
        
    }
        
}