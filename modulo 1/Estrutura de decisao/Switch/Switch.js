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

