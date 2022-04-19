// no try catch veremos sobre erros e tratação de erros, geralemnte quando um código identifica um erro ele para de executar, isso pode não ser interessante, pois haverão códigos com taxas de erros e para que o sistema não pare usamos o try catch para tratar o erro e continuar executando o programa.

// É importante que tratemos o erro e não exibamos o erro para o usuário no front-end trazendo uma experiência melhor e deixando o programa seguro.

// no try catch usamos o try para tratar e o catch para pegar o erro ex:

try { 
    console.log(naoExiste)
} catch(error) {
    console.log(error)
    console.log('Não existe')
}

// no exemplo acima ele irá nos mostrar onde está o erro e imprimir um console.log informado

// o try catch pode ser usado dentro de funções com o trhow ex:

function soma (x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x ou y precisam ser números')
    }
    return x + y;
}

try {
    console.log (soma(1,2));
    console.log (soma(a,2))
} catch(err) {
    console.log('Erro inusitado')
}

// nesse caso ele imprimira a primeira soma e no segundo caso ele retornará uma mensagem para o usuário identificando que houve algum erro.
// há diversas formas de referenciar um erro, então é interessante que criemos estratégias para que os erros encontrados sejam identificados e tratados da maneira correta.

// no try catch também usamos o finally que é a parte da operação que sempre ira retornar algo indiferente do que for feito no try e no catch

try {
    // executa o código
} catch {
// captura o  erro
} finally {
    // sempre sera executado indiferente do resultado de try e catch
}