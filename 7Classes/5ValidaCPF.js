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

class ValidaCPF{
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            configurable:false,
            enumerable:true,
            value: cpfEnviado.replace(/\D+/g,'')
        })
    }

    valida() {

        if(this.cpfLimpo === 'undefined') return false
        if(this.cpfLimpo.length !==  11 ) return false
        if(this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0,-2)
        const digito1 = ValidaCPF.criaDigito(cpfParcial)
        const digito2 = ValidaCPF.criaDigito(cpfParcial+ digito1)
        const novoCpf = cpfParcial + digito1 + digito2

        return novoCpf === this.cpfLimpo
    }

    static criaDigito(cpfParcial) {

        // como a função não utilizou nenhum valor dentro da instância foi possível deixar ela como uma função estática.

        const cpfArray = Array.from(cpfParcial)

        let regressivo = cpfArray.length + 1

        const total = cpfArray.reduce((ac, val)=> {
            ac += (regressivo * Number(val))

            regressivo--;

            return ac

        },0)

        const digito = 11 - (total % 11) 
        return digito > 9 ? '0' : String(digito)
    }

    isSequencia() {

        return this.cpfLimpo.charAt(0).repeat === this.cpfLimpo
    }
}

const val = new ValidaCPF('070.987.720-03')
console.log(val.valida())