// criar um variavel pra data 

const data = new Date();

// criar variaveis que imprimam diaSemana, dia, mes ano e hora

const dayWeek = data.getDay();
const date = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
const hours = data.getHours();
const minutes = data.getMinutes();
const dayTxt = dayOfWeek(dayWeek);
const monthTxt = monthAct(month);

// Criar switch case para dias da semana e mês

function dayOfWeek (dayWeek) {
    let dayTxt;

    switch (dayWeek) {
        case 0:
           dayTxt = 'Domingo';
            return dayTxt;
    
        case 1:   
        dayTxt = 'Segundar';
        return dayTxt;
    
        case 2:   
        dayTxt = 'Terça';
        return dayTxt;
    
        case 3:   
        dayTxt = 'Quarta';
        return dayTxt;
          
        case 4:   
        dayTxt = 'Quinta';
        return dayTxt;
         
         case 5:   
         dayTxt = 'Sexta';
            return dayTxt; 
        
        case 6:   
        dayTxt = 'Sábado';
        return dayTxt;
      
        default:
            dayTxt = 'Data incorreta'   
    }

    
}
 
function monthAct(month) {
    let monthTxt;

    switch(month) {

    case 0:
            monthTxt = 'Janeiro'
            return monthTxt;

    case 1:
            monthTxt = 'Fevereiro'
            return monthTxt;
        
    case 2:
            monthTxt = 'Março'
            return monthTxt;
        
    case 3:
            monthTxt = 'Abril'
            return monthTxt;
        
    case 4:
            monthTxt = 'Maio'
            return monthTxt;
        
    case 5:
            monthTxt = 'Junho'
            return monthTxt;
        
    case 6:
            monthTxt = 'Julho'
            return monthTxt;
        
    case 7:
            monthTxt = 'Agosto'
            return monthTxt;
        
    case 8:
            monthTxt = 'Setembro'
            return monthTxt;
        
    case 9:
                monthTxt = 'Outubro'
                return monthTxt;
            
    case 10:
            monthTxt = 'Novembro'
            return monthTxt;
        
    case 11:
            monthTxt = 'Dezembro'
            return monthTxt;
      
     default:
         monthTxt = 'Mes invalido'           
        

    }
}

function setResult(){

    const result = document.querySelector('.result');
    result.innerHTML = `<h1>${dayTxt}, ${date} de ${monthTxt} de ${year} ${hours}:${minutes} </h1> `;

        
}

setResult();

