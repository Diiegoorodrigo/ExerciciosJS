// em metodos de instância e estaticos em classe vemos qual é a diferença entre os dois, no metodo estatico ele é criado dentro da classe porém não tem acesso aos atributos que é estabelecido dentro do constructor, diferente do metodo de instância que consegue acessar o que é estabelecido dentro do constructor da classe, o metodo estatico pode ser chamado apenas pela classe e não pela instância ex:

class Computador {
    constructor (marca, ligado) {
        this.marca = marca
        this.ligado = false
    }

    ligar () {
        if(this.ligado) {
            console.log ('Seu computador está ligado')
        } else {
            return this.ligado = true
        }
    }

    desligar () {
        if(!this.ligado) {
            console.log ('Seu computador está desligado')
        } else {
            return this.ligado = false
        }
    }

    static soma (x,y) {
        return x + y
    }
}

 const cp1 = new Computador('Dell',false) 
 cp1.ligar()
 cp1.ligar()
 console.log(cp1)
 console.log(Computador.soma(1,2))


 console.log(cp1.soma(2,2))
 console.log(Computador.ligado())

 // no exemplo acima vemos a diferença entra instância e estatica, no caso acima a instância cp1 não consegue acessar a função soma e nem o computador consegue acessar a instância ligado por não ter acesso aos valores que ainda não foram instânciados.