// com async e await conseguimos deixar o código de uma promisse mais clean. Para criarmos async usamos ele em uma função e o await dentro do corpo da função.ex



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


/* 

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


*/

async function executa() {

    try {

        const fase1 = esperaAi('Fase 1', 1000)
    console.log(fase1)

    setTimeout(() => {
        console.log('Fase 1 que estava pendente foi concluida')
    }, 1200);
    
    const fase2 = await esperaAi('Fase 2', 4000)
    console.log(fase2)

      
    const fase3 = await esperaAi('Fase 3', 2000)
    console.log(fase3)

    } catch(e) {
        console.log(e)
    }


}

executa()

/*

como podemos ver no exemplo acima usamos a async, na primeira linha vemos o fase1 sem o awai e com isso ele execusa a promise e não retorna o seu valor.
Com isso vemos que as promise tem três estados

- Pendente
- Concluido (resolve)
- Reject

Também encapsulamos as promises dentro do try para capturar um erro se necessário

*/