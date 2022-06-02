import geraPass from "./gerasenha";

const creatP = document.querySelector('.geraSenha')
const qtdN = document.querySelector('.qtd')
const msc = document.querySelector('.ms')
const minL = document.querySelector('.mn')
const numL = document.querySelector('.nb')
const symN = document.querySelector('.sb')
const geraA = document.querySelector('.geraA')

export default () => {
    geraA.addEventListener('click', () => {
      creatP.innerHTML = gera();
    });
  };

function gera() {
    const senha = geraPass(qtdN.value, msc.checked, minL.checked, numL.checked, symN.checked)

    if(!senha) return 'Senha deve conter no maximo 20 caracteres'

    return senha || 'Nada Selecionado'

}