// a estrutura for in lê indices e chaves
// no caso de um array vetorial, o for in ira ler o indice do array. ex:

const frutas = ['uva', 'maçã', 'abacaxi', 'mamão']

for (let i in frutas) {
    console.log(i, frutas[i])
}

// nesse caso ele irá ler o indice do array que vai de 0 a 3 e mostrará cada fruta de acordo com seu indice.

// já na leitura do objeto, ele irá ler cada chave do objeto, ex:

const pessoa = {
    nome:'Pedro',
    sobrenome: 'Simão',
    idade: 30
}

for (let i  in  pessoa ){
    console.log(i, pessoa[i])
}

// nesse caso o i representa a chave e o pessoa[i] o conteudo da chave que foi lida, então a primeira linha i equivale a nome e pessoa[i] equivale a Pedro então a impressão é nome Pedro e assim por diante.