// declaração de função (function hoisting)
falaOi();

function falaOi(){
    console.log('oie')
}

// funções declaradas dessa maneira são funções que subirão pro escopo do js e podem ser chamadas linhas antes da declaração da função

// first-class objectc (funções são objetos de primera classe)
// Assim podendo ser inseridas dentro de variavéis e serem usadas em outras funções

const souUmDado = function() {
    console.log('sou um dado.')
}

function executaFuncao(funcao) {
    console.log('irei executar sua função abaixo')
    funcao()
}

executaFuncao(souUmDado)

// e dessa  maneira podemos tratar  uma função como um dado naturalmente

// arrow  function
// uma função mais curta

const arrowFunc = () => {
    console.log("sou uma arrow function")
}

arrowFunc();

// funções também pode ser criadas  dentro de objetos

const obj = {
   falar () {
       console.log('oi')
   },
   nome:' jose'
   
}

obj.falar();
