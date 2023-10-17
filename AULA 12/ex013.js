function botao(){
    window.alert
    var diaSem = new Date().getDay() 

    switch(diaSem){
        case 0:
            respostaJava.innerHTML = 'Domingo'
            console.log('Domingo')
            break
        case 1:
            respostaJava.innerHTML = 'Segunda'
            console.log('Segunda')
            break
        case 2:
            respostaJava.innerHTML = 'Terça'
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sábado')
            break
        default:
            console.log('ERRO! Dia Inválido.')
            break
    }    
}


