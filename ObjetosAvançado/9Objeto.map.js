// em objeto.map conseguimos mapear um objeto, assim facilitando o que queremos fazer com o objeto, pois diferente do for ele deixa a chave como number e não como uma string, o que poderia ser alterado na estrutura for, porém usar o map é mais proveitoso por conta dele ler conforme a inserção ou assimilando a chave ao contrário do for que faz em uma linha crescente

const pessoas = [
    {id:2, nome:'João'},
    {id:32, nome:'Marta'},
    {id:1, nome:'Marcelo'},
]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa})
}

console.log(novasPessoas)

// nessa metodo conseguimos usar o set, para inserir o valor e o get para receber o valor já inserido.
// notando que nessa estrutura ela considera o id semelhante ao id que tem na pessoa, se fosse na estrutura for ela não iria considerar esse id, mas sim eles em uma forma crescente, assim tornando a chave como 1 do id 2 e assim por diante.