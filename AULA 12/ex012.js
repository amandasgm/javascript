var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}h`)
if (hora < 12){
    console.log('Bom dia!')
}if(hora >= 12 && hora < 18){
    console.log('Boa tarde!')
}if(hora > 18){
    console.log('Boa noite!')
}