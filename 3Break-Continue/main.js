// o break e continue são usados na estrutura for, sendo o break para parar o código quando resultado encontrado e o continue executa o desejado e pula para o próximo numero ou elemento, ex:

let numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros ) {
    if (numero === 4) {
        console.log('Pulei o numero 4');
        continue;
    }
    if (numero === 6) {
        console.log('numero 6 encontrando parando o código')
        break;
    }
    console.log(numero)
}

// nesse caso ele ira imprimir até o 3 depois pulará o quatra exibindo o console.log declarado, continuará o coódigo imprimindo o 5 e depois ira imprimir a declaração do 6 e irá parar o código
// lembrando que se for executado no while e do while temos que colocar o incremento pro contador pro laço não se tornar um laço infinito