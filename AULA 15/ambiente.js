let num = [5, 8, 2, 9, 3]
num.sort() //organiza em ordem crescente
num.push(100) // adiciona o numero 7 na ultima posição

console.log(num) //mostra com os colchetes e virgulas
console.log(`O valor tem ${num.length} posições`) //o valor tem a quantidade de elementos dentro de num. lengh mostra o comprimento 
console.log(`O primeiro valor do vetor é ${num[0]}`) //primeiro elemento [0] dentro de num.

for(let pos in num){
    console.log(num[pos])
} 