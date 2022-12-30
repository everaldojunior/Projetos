function calcularImovel(m, q){
    let m2 = 3.000;
    let preco = 0;
    switch (q){
        case 1:
        default:
           preco = m * (m2 * 1);
            break;
        
        case 2:
            preco = m * (m2 * 1.2);
            break;
        
        case 3:
            preco = m * (m2 * 1.5);
            break;
    }     
    return preco;
}

let metragem = 200;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);