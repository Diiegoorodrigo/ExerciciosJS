// criando uma calculadora com função construtora.

function Calculadora () {

    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.clickButton();
        this.pressButton();
    };
    
    this.pressButton = () => {

        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        })
        
    };

    this.realizaConta = () => {

        let conta = this.display.value;
        try {
            conta = eval(conta)
            if(!conta) {
                alert('Não existe')
                return;
            }

            this.display.value = String(conta);

        } catch (e) {
            alert('Não existe')
        }
    };

    this.btnForDisplay = el => {
        this.display.value += el.innerText;
    };

    this.apagaUm = () => {
    this.display.value = this.display.value.slice(0,-1);
    }   

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.clickButton = () => {
        document.addEventListener('click', e =>{
            let  el = e.target;
    
            if(el.classList.contains('btn-num'))this.btnForDisplay(el);
            if (el.classList.contains('btn-delet'))this.apagaUm();
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-result'))this.realizaConta();   
        })
    }





}

const calculadora = new Calculadora();
calculadora.inicia();