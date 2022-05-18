function cardapio(ds) {
    var mistura;

    switch (ds) {
        case 'Segunda':
            mistura = 'Bife à Milanesa';
            break;
        case 'Terça':
            mistura = 'Frango Grelhado';
            break;
        case 'Quarta':
            mistura = 'Lasanha';
            break;
        case 'Quinta':
            mistura = 'File de Pascada';
            break;
        case 'Sexta':
            mistura = 'Almondegas';
            break;
        case 'Sabado':
            mistura = 'Filé à Parmegiana';
            break;
        case 'Domingo':
            mistura = 'Frango Assado';
            break;
        default:
            mistura = 'Dia da semana não informado!';
    }
    return mistura
}

//-------------------------------------------------------------------------------------------------------------------

var agora = new Date()
var diaSem = agora.getDay() //para pegar o dia da semana
//todos os dias da semana são enumeradas da seguinte forma
/*
 0=Domingo
 1=Segunda
 2=Terça
 3=Quarta
 4=Quinta
 5=Sexta
 6=Sabado
*/ 

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido')
        break
    }

    //switch é muito importante para testar datos pontuais ( ele so funciona com numeros inteiros e caracteres)