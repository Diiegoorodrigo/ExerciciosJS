// no setTimeout e setinterval vemos duas funções que executam ações durante um intervalo de tempo e outra que é aplicada depois de um determinado tempo.
// o setinterval é aplicado durante o periodo de tempo determinado
// ex: exibir a hora a cada 1 segundo

function mostraHora () {
    let data = new Date ();
    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}

const timer = setInterval(function() {
    console.log (mostraHora());
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 3000)


setTimeout(function(){
    console.log('ola Mundo')
}, 5000)

// no caso acima temos uma função que cria a data, setInterval que mostra a data a cada 1 segundo, o setTImeout que ira limpar a variavel que recebeu o setinterval assim fazendo o parar de executar a cada 1 segundo e depois de 5 segundo executa o outro timeout
// o setTimeou é a função que sera executado uma unica vez após  o tempo determinado, como vemos no exemplo acima, depois de 3 segundos e depois de 5 segundos