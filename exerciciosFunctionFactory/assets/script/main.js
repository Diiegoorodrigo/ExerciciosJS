// função que cria um objeto calculadora

function criaCalculadora () {
    return {
        display: document.querySelector('.display'),

        // metodo para inicia, para inicar os metodos dentro da calculadora, sendo  eles o do  click  e do press button

        inicia() {
            this.clickButtons();
            this.pressButtons();
            
        },

      
        // metoto para capturar a tecla enter, "(usei uma arrow function para que o this capturado fosse o objeto calculadora, poise se uso uma função anonima ou outra função, o this é capturado como a função que foi iniciada, a não ser que seja uma arrow function, ou coloque um bind() no final da função)"

        
        pressButtons() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta){
                    alert('Conta invalida')
                    return;

                }

                this.display.value = String(conta);

            } catch {

                alert('Conta invalida')
                return;

            }
        },

        btnForDisplay(valor){

            this.display.value += valor;

        },

        clearDisplay() {

            this.display.value = '';

        },

        apagaUm() {

            this.display.value = this.display.value.slice(0,-1);

        },

        clickButtons(){
            document.addEventListener('click', e => {
                let el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText)
                } 

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-delet')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-result')) {
                    this.realizaConta()
                }
                
            })
        }

    }
}   


const calculadora = criaCalculadora();
calculadora.inicia();