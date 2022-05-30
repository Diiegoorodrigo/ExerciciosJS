import Pessoa,{nome, sobrenome, soma} from "./modulo1";

const p1 = new Pessoa(nome,sobrenome)
console.log(p1, soma(30,2))
const p2 = new Pessoa('Marcelo', 'Oliveira')
console.log(p2)