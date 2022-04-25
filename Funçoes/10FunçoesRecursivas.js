// funções recursivas são semelhantas a estruturas for, elas tornam a se chamar conforme a aplicação que ela foi chamada. ex:

recursiva = (max) => {
    console.log(max)
    if (max >= 10) return;
    max++;
    recursiva(max)
}

recursiva(0)

// no exemplo acima a  função será executada 11 vezes que foi o valor determinado >= 10  para que ela deixasse de ser executada, assim é o funcionamento das funções recursivas.