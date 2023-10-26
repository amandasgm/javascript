function contar(){
    var i = document.getElementById('iinicio')
    var f = document.getElementById('ifim')
    var p = document.getElementById('ipasso')
    var msg = document.getElementById('msg')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        alert('ERRO!')
    }else{
        msg.innerHTML = 'Contando... <br> '

        var i = Number(i.value)
        var f = Number(f.value)
        var p = Number(p.value)

        if(p <= 0){
            alert('Passo invalido')
            p = 1
        }

        if(i < f){
            for(var c = i; c <= f; c += p){ 
                msg.innerHTML += `${c}  `    
            }
        } else {
            for(var c = i; c>=f; c -= p){
                msg.innerHTML += `${c}  `    
            }
        }
        }
    }
 

