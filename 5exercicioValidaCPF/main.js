// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/


// função construtora do objeto ValidaCPF

function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable:true,
        get: function() {
            return cpfEnviado.replace(/\D+/g,'') // comando para retirar o que não é número dentro do objeto
        }
    })

}


// método para validar o CPF

ValidaCPF.prototype.valida = function () {

    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0,-2) // pegar os 9 primeiros digitar do CPF
    const digito1 = this.criaDigito(cpfParcial) // usar o metodo cria digito para pegar o décimo número do cpf, devendo retornar o valor semelhante ao que foi inserido
    const digito2 = this.criaDigito(cpfParcial + digito1)  // usar o metodo cria digito para pegar o décimo primeiro número do cpf, devendo retornar o valor semelhante ao que foi inserido

    const novoCpf = cpfParcial + digito1 + digito2 // concatenar os valores devendo retornar o mesmo cpf que foi inserido
    return novoCpf === this.cpfLimpo

}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {

    const cpfArray =  Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1 

    const total = cpfArray.reduce((ac, val) => {

        ac += (regressivo * Number(val))

        regressivo --;

        return ac

    },0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)

}


ValidaCPF.prototype.isSequencia = function() {

    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)

    return sequencia === this.cpfLimpo

    // método para interceptar repetições de um único número que passariam como cpf valido
}


const cpf = new ValidaCPF('428.741.708.95');

if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}
