const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTxt;

switch(diaSemana) {
    case 0:
        diaSemanaTxt = 'Domingo';
        break;

    case 1:   
         diaSemanaTxt = 'Segunda-Feira';
        break;

    case 2:   
        diaSemanaTxt = 'Terça-Feira';
       break;

    case 3:   
       diaSemanaTxt = 'Quarta-Feira';
      break;
      
    case 4:   
      diaSemanaTxt = 'Quinta-Feira';
     break;
     
     case 5:   
     diaSemanaTxt = 'Sexta-Feira';
    break; 
    
    case 6:   
         diaSemanaTxt = 'Sábado';
        break;
  
    default:
        diaSemanaTxt = 'Data incorreta'
}

console.log(diaSemanaTxt)


// switch/case usamos em caso que verificamos apenas uma variável usamos o switch/case que sera uma forma mais pratica de verificar e atribuir valores ao resultado desejado e também pode ser aplicado dentro de funções e podemos usar o return no lugar do break