function contar(){
    var i = document.getElementById('iinicio')
    var f = document.getElementById('ifim')
    var p = document.getElementById('ipasso')
    var msg = document.getElementById('msg')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        msg.innerHTML = 'Dados incompletos. Preencha todas as informações pedidas.'
    }else {
        msg.innerHTML = `Contando...`

        var i = Number(i.value)
        var f = Number(f.value)
        var p = Number(p.value)

        for(var c = i; c <= f; c += p){
            msg.innerHTML += `${c }`
        }

    }
}



