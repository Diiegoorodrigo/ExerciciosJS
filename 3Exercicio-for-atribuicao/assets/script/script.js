let inputPeso = document.querySelector('.peso');
let inputAltura = document.querySelector('.altura');

function result () {


let result = calcIMC()
let printResult = document.querySelector('.result')


if (result == false ) {
    printResult.innerHTML = ` <p> Valor digitado incorreto</p> `
   
} else if (result < 18.5 ) {
    printResult.innerHTML = `<p> Seu imc é ${result} você está abaixo do Peso</p>`
} else if (result >= 18.5 && result < 25 ) {
    printResult.innerHTML = `<p> Seu imc é ${result} você está com peso normal </p>`
} else if (result >= 25 && result < 30 ) {
    printResult.innerHTML = `<p> Seu imc é ${result} você está acima do peso </p>`
} else if (result >= 30 && result < 35 ) {
    printResult.innerHTML = `<p> Seu imc é ${result} você atingiu obesidade primeiro grau </p>`
} else if (result >= 35 && result < 40 ) {
    printResult.innerHTML = `<p> Seu imc é ${result} você atingiu obesidade segundo grau </p>`
}  else {
    printResult.innerHTML = `<p> Seu imc é ${result} você atingiu obesidade terceiro grau </p>`
}
    

  


 
}

function calcIMC () {

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    let falseResult = document.querySelector('.result');
    
    if(!peso){
        falseResult.innerHTML = `<p> Valor digitado incorreto</p>`
        return false;

    }

   else  if (!altura){
        falseResult.innerHTML =  false;
        return false;
    } else {
        let result = peso / (altura * altura);

        return result.toFixed(2);
    }

   

    

}