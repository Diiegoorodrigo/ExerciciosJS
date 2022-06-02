// 1 - selecionar formulário
// 2 -  criar uma lista de eventos
// 3 -  criar evento para segurar o envio do formulário
// 4 - criar metodo para validar os campos do formulário



class ValidForm {
    constructor() {
        this.form = document.querySelector('.dform')
        this.afterForm = document.querySelector('.after-form')
        this.formContent = document.querySelector('.form-section')

        this.events()

    }
    
    events () {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })

    }

    handleSubmit(e) {

        // metodo que irá controlar o envio do formulário

        e.preventDefault()
       const checkFields = this.checkFields()
       const validPassword = this.validPassword()

       if(checkFields && validPassword) {
           alert('Formulario enviado')
           this.formContent.style.display = 'none'
           this.afterForm.style.display = 'block'
       }
    }

    validPassword() {

        // metodo para verificar o tamanho da senha e se elas estão iguais

        let valid = true;

        const password = this.form.querySelector('.password')
        const repeatPassword = this.form.querySelector('.repeatPassword')

        if(password.value !== repeatPassword.value) {
            valid = false
            this.creatError(password, 'As senhas precisam ser iguais')
            this.creatError(repeatPassword, 'As senhas precisam ser iguais')

        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false
            this.creatError(password, 'Senha precisa ter entre 6 a 12 caracteres ')
        }

        return valid
    }



    checkFields() {

        // função para checar os campos

        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        // for para retirar as mensagens de error quando inseridas.
    
        for( let field of this.form.querySelectorAll('.valid' ) ){

            // for para passar por cada input

            const label = field.previousElementSibling.innerText

        

            if(!field.value) {

              this.creatError(field, `Campo ${label} não pode ficar em branco`)
              valid = false

              // condição para verificar se o input não está vazio

            }

            if(field.classList.contains('cpf')) {

                if(!this.validaCPF(field)) valid = false;

                // condição para verificar o cpf  

            }

            if(field.classList.contains('userName')) {

                if(!this.validUser(field)) valid = false

                // condição para verificar o nome de usuário

            }



        }

        return valid


    }

    validUser(field) {

        // metodo para verificar o tamanho do nome do usuário
        
       const user = field.value

       let valid = true

       if (user.length > 12 || user.length < 3 ) {

           this.creatError(field, 'Usuario precisa ter entre 3 e 12 caracteres ')

           valid = false

       }

       if(!user.match(/^[a-zA-Z0-9]+$/g)){

        // condição e metodo para verificar se o nome do usuário contem apenas letras e númeors

        this.creatError(field, 'nome do usuário precisa conter apenas letras ou númemoros ')
        valid = false

       }

       return valid
    }

    validaCPF(field) {

        // metodo para validar cpf, usando outro script de valida CPF

        const cpf = new ValidaCPF(field.value) 

        if(!cpf.valida()) {

            this.creatError(field, 'CPF invalido')
            return false

        }

        return true
    }

    creatError(field, msg) {

        // metodo para criar uma msg de erro

        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend',div)
    }
  
}

const valid = new ValidForm()