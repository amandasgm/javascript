function verificar () { //ao precionar a função "verificar", que na verdade é o botao...
    
    var ano = new Date(). getFullYear() // variavel ano = ano atual
    var fano = document.getElementById('txtano') // variavel fano = o ano que foi escrito na id txtano
    
    if (fano.value.length <= 3 || fano.value > ano ){ // caso o valor de fano tenha um comprimento menor ou igual a 3 ou o valor de fano seja menor do que o ano atual..
        window.alert('ERRO. VERIFIQUE OS DADOS E TENTE NOVAMENTE') 
    } else { // caso de tudo certo e a variavel fano seja cumprida...
        var fsex = document.getElementsByName('radsex')  // a variavel fsex recebera a resposta radsex
        var idade = ano - fano.value // a variavel idade recebera o ano - o valor digitado em txtano
        res.innerHTML= `Idade calculada: ${idade}` // a resposta será exibida no HTML 
        var genero = '' // a variavel genero será criada mas ficará vazia

        if (fsex[0].checked){ // SE o que tiver "MARCADO" for a opção [0 - masculina], a variavel 'genero' (que está vazia), passará a ser preenchida com a opção MASCULINA
            genero = 'Homem'
        } else if (fsex[1].checked) { // SE o que tiver "MARCADO" for a opção [1 - FEMININO], a variavel 'genero' (que está vazia), passará a ser preenchida com a opção FEMININA
            genero = 'Feminino'
        }
        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos` // e por fim a res passará a ser a frase completa.
    }
        

}