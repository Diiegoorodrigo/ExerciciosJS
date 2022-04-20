// criar um timer

// primeiro criar uma funçao que retorne os segundos

function getSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { 
        hour12:false,
        timeZone: 'GMT'
    
    })
}

// criar uma variavel para segundos, timer e para selecionar os objetos no html

const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector ('.parar');
const zerar = document.querySelector ('.zerar');
const relogio = document.querySelector('.timer');
let segundos = 0;
let timer;

// criar uma função que inicie o relogio
function startTimer() {
    timer = setInterval(function(){
    segundos ++;
    relogio.innerHTML = getSeconds(segundos);
    },1000)
}


// crie uma função para adicionar eventos no html

// iniciar.addEventListener('click',function(e){
 //   relogio.classList.remove('pausado');
  //  startTimer();
// })

 // parar.addEventListener('click', function(e){
//     clearInterval(timer);
 //    relogio.classList.add('pausado');
// })

//    zerar.addEventListener('click', function(e){
 //       relogio.classList.remove('pausado');
 //       clearInterval(timer);
 //       segundos = 0;
 //       relogio.innerHTML = getSeconds(segundos);
//    })

// inserindo as funções em apenas uma função de target//  
// nesse código coloquei um classList.contains() para identificar a classe que o target clickou
// houve um bug na contagem do iniciar que quando clicado duas vezes ele não parava de contar e mesmo zerado não parava de contar, adicionei o iniciar.disabled para desabilitar o botão quando iniciado a contagem  

document.addEventListener('click', function(e){
    const element = e.target;

    if (element.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        iniciar.disabled = true;
        startTimer();
    }

    if (element.classList.contains('parar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
        iniciar.disabled = false;
    }

    if (element.classList.contains('zerar')) {

        relogio.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = getSeconds(segundos);
        iniciar.disabled = false;
    }

})



