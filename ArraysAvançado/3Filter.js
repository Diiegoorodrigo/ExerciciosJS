// no metodo filter() conseguimos filtrar elementos dentro de um array ou objeto e os retornando dentro de outras variaveis, introduzindo funções criadas ou funções anonimas  para identificar valores dentro do array conforme a condição ex:

let numeros = [1,42,44,123,431,223,4,22,321,550]

function number1 (valor) {
    if(valor < 50) return true;
}

let numerosReturn = numeros.filter(n => n > 100)
let numerosReturn2 = numeros.filter(number1)
let numerosReturn3 = numeros.filter(function(valor) {
    if(valor > 30 && valor < 50) return true;
})


console.log(numerosReturn)
console.log(numerosReturn2)
console.log(numerosReturn3)


// acima vemos exemplos de como podemos usar o metodo filter, e o que podemos inserir dentro dele.

// retorne as pessoas que tem o nome com 5 letras ou mais
// Retorner as pessoas com mais de 50 anos
// Retorne pessoas cujo nome termina com a letra a

const pessoas = [ 
    {nome:'Marcelo', idade:32},
    {nome:'José', idade:90},
    {nome:'Marta', idade:42},
    {nome:'Maria', idade:62},
    {nome:'Pedro', idade:42},
    {nome:'Marco', idade:52},
    {nome:'João', idade:72},
]

let nameFive = pessoas.filter(value => value.nome.length >= 5 )
console.log(nameFive)

let ageFifth = pessoas.filter (value => value.idade > 50)
console.log(ageFifth)

let peopleWithA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(peopleWithA)

// os três em um
console.log('##########')
console.log('##########')
console.log('##########')


let tresEmUm = pessoas.filter(obj => obj.nome.length >= 5 && obj.idade > 50 && obj.nome.toLowerCase().endsWith('a'))
console.log(tresEmUm)