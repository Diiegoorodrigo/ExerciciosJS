// funções imediatas, são funções que são invocadas imediatamente, executando o que foi determinada em seu escopo, são as IIFE -> Immediately invoked function expression. ex:

(function(idade, peso, altura) {
    console.log(idade,peso,altura)
})();

// lembrando que ela é definida dentro de "()" e logo após declarar ela, coloca-se outro "()", para executar a função.
// Lembrando que o que for definido dentro da função imediata é protegido pelo seu escopo, assim evitando que o que for declarado após a função ser invocada, faça alguma alteração dentro da função.
let resultado;

(function calculo (x,y,operador) {

    
    if (operador=="/") {
        resultado = x / y;
        console.log(resultado);
    } else if (operador == "*") {
        resultado = x*y;
        console.log(resultado);;
    } else if (operador=="+") {
        resultado = x +y;
        console.log(resultado);
    } else if (operador == "-") {
        resultado = x - y;
        console.log(resultado);
    } else {
        console.log ('insira um operador valido')
    }

    
   
})(2,2,"-")


resultado = 20;

console.log(resultado)

// percebe que no caso da função invocada, o retorno não será de 20, pq a função foi protegida com seu escopo, ela o resultado só retornará 20 no console.log que vem a seguir da declaração de resultado = 20, pois foi declarado fora do escopa da função que foi invocada imediatamente, com isso conseguimos executar alguns comando de forma eficiente e proteger o escopo de nossas funções.
