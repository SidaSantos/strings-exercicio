//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const frase1 = frase.replace("verde", "rosa")
const frase2 = frase.replace("azul", "laranja")
console.log(`${frase1}\n ${frase2}`)

console.log(frase.includes("verde"))
console.log(frase.includes("laranja"))

const parteFrase = "mas não deixe o gato sair"
console.log(frase.replace(parteFrase, parteFrase.toUpperCase())) 
