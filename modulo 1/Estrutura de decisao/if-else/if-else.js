var nota = 6.9

if (nota <7) {
    console.log('REPROVADO')
} else {
    console.log('APROVADO')
}

//-------------------------------------------------------------------------------------------------------------------

var  vel = 78.5 
console.log(`A velocidade do seu carro é ${vel}km/h`)
console.log('Dirija sempre usando o cinto de segurança')
//if = se 
if (vel > 60) { //condição simples! 
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}

//-------------------------------------------------------------------------------------------------------------------

var pais = 'EUA'
console.log (`vivendo em ${pais}`)
if (pais == 'Brasil') {
    console.log('brasileiro!')
} else { //se não 
    console.log('estrangeiro')
}

//-------------------------------------------------------------------------------------------------------------------

var agora = new Date() //para pegar a hora atual so fazer "new Date()"
var hora = agora.getHours() //em seguida escrever o nome da variavel(agora) com "get.hours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora  <12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora >18) {
    console.log('Boa noite!')
} 

// se a hora for menor que 12 'bom dia', e se a hora for menor ou igual que 18 'boa tarde', e se a hora for maior que 18 'boa noite'.

//-------------------------------------------------------------------------------------------------------------------


var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional')
    } else if (idade >= 18) {
        console.log('Voto obrigatorio')
    } 

// se a idade for menor de 16 'nao vota', se não se a idade for menor que 18 sabendo que menor do que 18 maior  ou igual a 16 então o voto é opcional, se a idade for maior que 65 o voto é opcional 