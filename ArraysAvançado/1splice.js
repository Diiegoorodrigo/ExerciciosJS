// na função splice vemos que ela contem o comportamento dos diversos metodos dos arrays, como push, pop, shift, unsfhit e etc.
// o espoco do metodo é splice(indicador atual, quantidade a ser deletada, elemento novo, elemento novo, elemento novo), e também retorna o que foi removido,  só que retorna dentro de um array.

let nomes = ['maria','jose','marcelo','pedro'];

const nomesRemovidos = nomes.splice(4,1);
console.log(nomes, nomesRemovidos);

// no caso acima, veremos o console imprimindo nomes com três nomes e nomesRemovido pedro que foi o ultimo nome.
n
nomes.splice(nomes.length,0,'Joaquim','Antonio')

console.log(nomes)

// já nesse caso veremos que dois nomes foram adicionados na variavel nome, a partir do final da variavel, da pra adicionar no meio, no inicio, na onde desejarmos basta arquitetar o código e executar.