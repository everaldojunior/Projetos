function calcularImovel(m, q){
    m2 = 3000;
    vm = m * m2;
    
    switch (q){
        case 1:
            q1 = m2 * 1;
            break;    
        
        case 2:
            q1 = m2 * 1.2;
            break;    

        case 3:
           q1 = m2 * 1.5;
            break;    
    }
    
    return  vm * q1;

    console.log(q);
    console.log(m2);
    console.log(vm);
}


let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log('A casa custa R$' + preco);