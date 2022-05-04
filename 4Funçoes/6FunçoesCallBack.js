// em funções temos o callback, que serve para que uma função seja executada se ela atender a uma requisição, assim mantendo uma ordem no sistema.
// Exemplo, eu preciso que sejam imprimidas três frases, mas preciso que sejam executadas em ordem, e que a frase posterior só seja inserida se a anterior tenha sido impressa. ex:

function frase1 () {
    console.log('Sou a primera')
}

function frase2 () {
    console.log('Sou a segunda')
}

function frase3 () {
    console.log('Sou a terceira')
}

frase1()
frase2()
frase3()

// nesse caso imprimiria em ordem, mas e se cada função tenha um tempo para ser executada, como seria?

function timer(min=1000, max =3000) {
    const num = Math.random() * (max-min)+min;
    return Math.floor(num);
}

function frase11 () {
    setTimeout(function () {
        console.log('Sou a primeira 1')
    }, timer()) 
}

function frase22 () {
    setTimeout(function () {
        console.log('Sou a segunda 2 ')
    }, timer()) 
}

function frase33 () {
    setTimeout(function () {
        console.log('Sou a terceira 3')
    }, timer()) 
    
}

frase11()
frase22()
frase33()

// nesse caso a impressão seria de forma aleatória, e perderiam o objetivo de serem impressas em ordem, como arrumamos isso? colocando um callback dentro da função.ex


function timer(min=1000, max =3000) {
    const num = Math.random() * (max-min)+min;
    return Math.floor(num);
}

function f1 (callback) {
    setTimeout(function () {
        console.log('Sou a primeira sim')
        if(callback) callback();
    }, timer()) 
}

function f2 (callback) {
    setTimeout(function () {
        console.log('Sou a segunda sim ')
        if(callback) callback();
    }, timer()) 
}

function f3 (callback) {
    setTimeout(function () {
        console.log('Sou a terceira sim')
        if(callback) callback();
    }, timer()) 
    
}

f1(f1Callback)

function f1Callback () {
    f2(f2Callback)
}

function f2Callback () {
    f3(f3Callback)
}

function f3Callback () {
    console.log('agora está em ordem')
}

// no exemplo acima veremos que as funções só serão executadas conforme a ordem de callback que foi definida, assim mantendo a ordem padrão, e com isso conseguimos aplicar em sistemas, que só executarão tal comando após a execução de outro, um exemplo é a se houve adição de um nome na lista, a lista só será imprimida após a conclusão do nome inserido na lista, de forma que não mostre a lista desatualizada.