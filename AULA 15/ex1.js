let num = [5,8,2,9,3]

for(let pos = 0; pos < num.length; pos++ ){
    console.log(`A posição ${pos} tem os valores ${num}`)
}


for(let pos in num){                                                //"PARA CADA POSIÇÃO DENTRO DE NUMEROS"
    console.log(`A posição ${pos} tem os valores ${num[pos]}`)      //"VOU MOSTRAR O NUM[POS]"
}
 