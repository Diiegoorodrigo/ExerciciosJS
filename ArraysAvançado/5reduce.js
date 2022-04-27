// no metodo reduce usamos ele para reduzir o array em um unico elemento, ele consegue executar as mesmas funções do map e do filter, embora não é o ideal usa-lo dessa maneira.
// diferente de map e filter, o reduce recebe um acumulador, mudando a estrutura da função (valor, indice, array) para (acumulador, valor, indice, array)
// o acumulador é como se fosse um contador da estrutura for, podemos atribuir um valor a ele, se nenhum valor for atribuido o valor dele será o mesmo valor do primeiro elemento do array.
//ex:

let numeros = [1,42,44,123,431,223,4,22,321,550]

// some todos valores 

let soma = numeros.reduce(function(acumulador, valor){
    acumulador += valor
    return acumulador
},0)

console.log(soma)

// retorner a pessoa mais velha

const pessoas = [ 
    {nome:'Marcelo', idade:32},
    {nome:'José', idade:90},
    {nome:'Marta', idade:42},
    {nome:'Maria', idade:62},
    {nome:'Pedro', idade:42},
    {nome:'Marco', idade:52},
    {nome:'João', idade:72},
]

let pessoaVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade)  return acumulador;
    return valor;
})

console.log(pessoaVelha)