// em promise teremos o mesmo resultado que usamos na função de callback porém de uma forma não poluente a visão e mais compacta, deixando o código de forma assincróna.
// Para usasr uma promisse usamos o new Promise ((resolve, reject)) e logo depois determinando como será resolvida a promisse
// depois usamos then e catch para retornar o que foi estabelecido dentro da promise.
// ex:

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

esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta)
    return (esperaAi('Buscando dados da Base', rand(1,3)))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi(22222, rand(1,3))
})
.then(resposta =>{
    console.log(resposta)
    return console.log('Exibir dados na tela')
})
.catch(e =>{
    return e
})

// no exemplo acima vemos cada then sendo executado em sequencia conforme estabelecido dentro do promise, assim como seria com a função de callback, porém sem que sejá necessário ficar criando função dentro de função, o próprio promisse captura o valor e retorna de maneira assincrona, assim deixando o código executando sem que pule etapas, e parando o código assim que o catch captura o erro.