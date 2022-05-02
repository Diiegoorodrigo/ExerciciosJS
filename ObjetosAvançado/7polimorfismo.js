// no polimorfismo trabalhamos com classes que recebem atributos de uma super classe, como o exemplo de um banco que cria contas, sendo elas conta corrente e contas poupanças que tem a disponibilidade de saque porém a conta corrente se comporta diferente por ter um limite extra na conta ex:

function Conta (agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.saque = function (valor) {
    if(valor > this.saldo) {
        console.log('saldo insuficiente ' ,this.saldo)
        return
      
    }
    this.saldo -= valor
    return  console.log('seu saldo é ', this.saldo)
}

Conta.prototype.deposito = function (valor) {
    this.saldo += valor
    return console.log ('seu saldo é ', this.saldo)
}

function ContaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia,conta,saldo )
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.saque = function (valor) {
    if(this.saldo + this.limite < valor) return console.log('saldo insuficiente ' ,this.saldo)
    this.saldo -= valor
    return  console.log ('seu saldo é ', this.saldo)
}

const conta1 = new ContaCorrente(1515,050232, 100, 100)
console.log(conta1)
conta1.saque(200)
conta1.deposito(300)

function ContaPoupanca (agencia, conta, saldo) {
    Conta.call(this, agencia,conta,saldo )
   
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

console.log()
console.log()
console.log()



const conta2 = new ContaPoupanca(1515,0235, 100)

console.log(conta2)
conta2.saque(300)

// se observarmos o comportamento de conta corrente e conta poupança serão diferentes, embora a conta corrente herde as caracteristicas de uma superclasse ela foi alterada  em alguns aspectos assim dando um comportamento diferente, e isso é polimorfismo.