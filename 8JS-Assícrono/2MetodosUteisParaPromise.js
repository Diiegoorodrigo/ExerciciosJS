function rand(max, min) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)

}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject (console.log('Valor inválido'))

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    } )
}

// Promise.all Promise.race Promise.resolve Promise.reject

// em promise.all ele pega uma quantidade de promiese e resolve todas e as retorna dentro de um array ou retornará o primeiro erro que ela encontrar. ex

const promises = [ 
    
    esperaAi('Promisse 1', rand(1,5)),
    esperaAi('Promisse 2', rand(1,5)),
    esperaAi('Promisse 3', rand(1,5)),
    
]

Promise.all(promises)
.then(valor => {
    console.log(valor)
}).catch(e => {
    console.log(e)
})

// Promise.race retorna a primeira Promise que ele resolve

Promise.race(promises)
.then(valor => {
    console.log(valor)
}).catch(e => {
    console.log(e)
})

// nesse caso acima ele retornará a primeira promise que foi resolvida em promises

// Promise.resolve e promise.reject retornam uma promise pronta. ex

function mostraValor (valor) {
    if(typeof valor !== 'number') {
        return Promise.reject(valor + ' não é um numero')
    }
   if(valor > 10) 
    {
        return Promise.resolve('O Valor '+ valor + ' maior que 10 ' )
    } else {
   return esperaAi('Valor '+ valor +' menor que 10', rand(1,5))
    }
}

// ex: executando a promisse que será resolvida

mostraValor(1)
.then(dados => {
    console.log(dados)
}).catch(e => {
    console.log(e)
})


// retornarndo a promise.resolve 

mostraValor(12)
.then(dados => {
    console.log(dados)
}).catch(e => {
    console.log(e)
})

// retornando promise.reject

mostraValor('aaaa')
.then(dados => {
    console.log(dados)
}).catch(e => {
    console.log('ERRO ',e)
})

 