// Capturar evento de submit do formulário

const form =  document.querySelector('.form-area');

form.addEventListener('submit', function (event) {

    // código para parar envio do submit

    event.preventDefault();

    // capturando informações através do target

    const inputPeso = event.target.querySelector('.peso');
    const inputAltura = event.target.querySelector('.altura');

    // modificando string para numeros 

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // condição para avaliar se o valor recebido não é um numero e retornar o a mensagem e o valor falso na functior setResult

    if (!peso) {
        setResult('Peso Invalido', false)
        return;
    }

      // condição para avaliar se o valor recebido não é um numero e retornar o a mensagem e o valor falso na functior setResult

    if (!altura) {
        setResult('Altura Invalida', false)
        return;
    }

    // variaveis que receberam funções criadas abaixo para calcular o Imc e para exibir o nivel determinado

    const imc = getImc(peso, altura)
    const nivelImc = indiceImc(imc);
    
    // criado a msg para retornar os valores do IMC e a msg a ser  exibida retornando o true para validar a msg de acordo com o fundo que ela receberar no isValid

    const msg = `Seu IMC é ${imc} (${nivelImc})` 

    setResult(msg, true);


});

// Função para definir o indice do IMC 

function indiceImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal', 'Acima do peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 19.9) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

// função para IMC

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Criar função para criar parágrafo 

function criaP () {
    const p = document.createElement('p');
    return p ;

}

// Criar uma função  para inserir o resultado 

function setResult (msg, isValid) {

    const resultado = document.querySelector('.result');
    resultado.innerHTML = '';

    
    const p = criaP () ;

    // inserir uma classe no p

    if (isValid) {
        p.classList.add('good')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;

    // aplicar o p dentro da div resultado
    
    resultado.appendChild(p);

   

}