import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'

(function gera () {
    
  
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.result')
    cpfGerado.innerHTML = gera.geraNovoCpf()


})();





