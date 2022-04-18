// na estrutura de repetição while, a condição é de enquanto um valor for conforme a condição ele continuará executando, ex: enquanto i < 10 ele executará um código, na estrutura while não podemos esquecer de atualizar o valor da variavel em questão, nesse caso o "i", pois se esquecermos de atualizar a variavel entraremos em um loop infinito, importante saber que o while primeiro checa a condição e depois executa o código. ex:

let i = 0;

while (i < 10 ) {
    console.log(i);
    i++;
}


// nesse caso a estrutura irá repetir até o numero 9


// o uso comum na estrutura while é em casos que não sabemos qual o fim de um código, por exemplo:

function random (min, max) {
    const r = Math.random() * (max - min ) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(min,max)

while (rand!== 10) {
    rand = random(min,max);
    console.log(rand)
}

console.log('#######')

// nesse caso usamos a estrutura para um número randomico, e dentro da estrutura while se repete enquanto o numero for diferente de 10 sendo assim a estrutura só para quando o número for 10 ai para a estrutura while

// já na estrutura do while ele primeiro executa o código e depois checa se a estrutura é verdadeira ou falsa



let rand2 = 10;


while (rand2!== 10) {
    rand2 = random(min,max);
    console.log(rand2)
}

console.log('#######')


do {
    rand2 = random(min, max)
    console.log(rand2)
} while (rand2 !==10)

// no caso acima apenas o do while continuara fazendo o laço de repetição, pois primeiro ele executará o código assim ele mudará o valor de rand2 e depois vai checar se é verdadeiro ou falso, diferente do while que primeiro checa a condição para depois executar o código, essa é a diferença entre o while e do while, enquanto um primeiro checa e depois executa, o outro executa primeiro e depois checa.