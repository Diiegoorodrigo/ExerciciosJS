// o escopo léxico a função ira executar o que há  dentro dela, e se há alguma instrução para ela executar que não esteja dentro dela ela tentara executar com o escopo global, ex:

const nome = "pEdro"

function falaNome() {
    const sobrenome = "Algum ai";
    console.log(nome, sobrenome)
}


function usaFalaNome () {
 const nome = "Pedringo"   
falaNome()
}

usaFalaNome()

// no caso acima iremos perceber que o comportamento da função falaNome ira imprimir Pedro + algum ai, pois ela executa o "nome" que não estava dentro dela, mas sim ao seu redor, porém se houvesse alguma variavel nome dentro dela, ela iria desconsiderar a variavel nome fora do escopo, pois prioriza o que está dentro do escopo, porém se não houvesse em ambos, iria retornar um erro de variavel não declarada
// já no caso do usaFalaNome ela ainda permanecerá usando o nome que foi criado no escopo global quando executar a função fala nome pois o nome declarado não foi dentro da função falaNome, mas sim da usaFalaNome, nesse caso ela não considera o nome que foi criado dentro da função usaFalaNome, mas sim no seu vizinho que é o escopo  global