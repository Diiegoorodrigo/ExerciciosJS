// closures é uma função que lembra o ambiente que foi criada, um aninhado de função ex:

function sayName () {
    const name = 'Azul'
    return function () {
        return name;
    }
}

const usn = sayName();

console.dir(usn())


function sayName2 (name) {
    
    return function () {
        return name;
    }
}

const usn2 = sayName('Josué');

console.dir(usn2())

// nos dois exemplos acimas vemos closures, variavéis que receberam funções