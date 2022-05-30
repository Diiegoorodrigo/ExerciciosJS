// em importação e exportação usamos alguns modos para exportar e importar, para melhor entendimento ler documentação no MDN https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export

// cada modulo só pode ter um default



export const nome = 'luiz'
export const sobrenome = 'miranda'
export const idade = 30

export function soma (x,y) {
    return x + y
}

export default class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}