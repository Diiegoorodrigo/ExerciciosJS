const rand = (min, max) => Math.floor(Math.random()*(max-min)+min)
const geraMais = () => String.fromCharCode(rand(65,91))
const geraMin = () => String.fromCharCode(rand(97,123))
const geraNum = () => String.fromCharCode(rand(48,58))
const sym = '^~()*&%$#@!.,;'
const geraSym = () => sym[rand(0,sym.length)]

export default function geraPass(qtd, maisc, minus, num,symb){

    const senhaArray = []
    qtd = Number(qtd)
    if(qtd > 20 ) return

    for(let i = 0; i < qtd ; i++) {
        maisc && senhaArray.push(geraMais())
        minus && senhaArray.push(geraMin())
        num && senhaArray.push(geraNum())
        symb && senhaArray.push(geraSym())
    }

    return senhaArray.join('').slice(0,qtd)

}

