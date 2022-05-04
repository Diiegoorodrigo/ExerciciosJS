// factory function, são funções fábrica, que retornam objeto  dentro.
// dentro dessas funções  podemos adicionar metodos e também elementos como GET e SET
// Get é o elemento que faz com que uma função se comporte como uma variavel,  porém o valor dele não pode ser alterado
// é o set é  o elemento que permite que uma  variavél seja  alterada dentro do metodo

function criaPessoa (nome, sobrenome,  altura,  peso) {
    return {
        nome,
        sobrenome,

        //Getter 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // setter 
        set nomeCompleto(valor) {
                valor = valor.split(' ');
                // valor.split, fará  com que cada valor que seja atribuido dentro do nome completo se comporte como um vetor de um array
                this.nome = valor.shift();
                //shift retirará o primeiro valor que é o nome e deixara o que sobrar dentro do array
                this.sobrenome = valor.join(' ');
                // valor.join colocará na variavel this.sobrenome tudo o que estou dentro do array que foi criado
        },

        altura,
        peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }

    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log (p1.nome)
console.log(p1.sobrenome)

p1.nomeCompleto = 'Pedro Marcelo Manolo Oliveira'
console.log (p1.nome)
console.log(p1.sobrenome)

p1.imc = 300;
console.log(p1.imc)

// no caso acima conseguimos ver a eficiência do Set e do Get, no caso conseguimos alterar o nome de p1 por conta do elemento Set, porém não conseguimos alterar seu imc, pois a partir do momento que o Get faz com que a a função se comporte como uma variavel ele não permite que mude seu valor, a não ser que haja um setter para que o valor seja alterado.