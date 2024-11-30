let Ingredientes1 = document.getElementById('itm1');
let quantidade1 = document.getElementById('qtd1');
let preco1 = document.getElementById('preco1');
let total1 = document.getElementById('tot1');

let Ingredientes2 = document.getElementById('itm2');
let quantidade2 = document.getElementById('qtd2');
let preco2 = document.getElementById('preco2');
let total2 = document.getElementById('tot2');

let Ingredientes3 = document.getElementById('itm3');
let quantidade3 = document.getElementById('qtd3');
let preco3 = document.getElementById('preco3');
let total3 = document.getElementById('tot3');

let Ingredientes4 = document.getElementById('itm4');
let quantidade4 = document.getElementById('qtd4');
let preco4 = document.getElementById('preco4');
let total4 = document.getElementById('tot4');






let ValorFinal = document.getElementById('totalFinal')
//criando a função de calculo do 1 produto

function calcularTotal1() {
    let qtd = parseFloat(quantidade1.value) || 0;
    let preco = parseFloat(preco1.value) || 0;
    total1.textContent = (qtd * preco).toFixed(2); //tofixed() determina a qtd de casas decimais que desejo representar no numero
    atualiizarvalorFinal();
}

function calcularTotal2() {
    let qtd = parseFloat(quantidade2.value) || 0;
    let preco = parseFloat(preco2.value) || 0;
    total2.textContent = (qtd * preco).toFixed(2); //tofixed() determina a qtd de casas decimais que desejo representar no numero
    atualiizarvalorFinal();
}


function calcularTotal3() {
    let qtd = parseFloat(quantidade3.value) || 0;
    let preco = parseFloat(preco3.value) || 0;
    total3.textContent = (qtd * preco).toFixed(2); //tofixed() determina a qtd de casas decimais que desejo representar no numero
    atualiizarvalorFinal();
}


function calcularTotal4() {
    let qtd = parseFloat(quantidade4.value) || 0;
    let preco = parseFloat(preco4.value) || 0;
    total4.textContent = (qtd * preco).toFixed(2); //tofixed() determina a qtd de casas decimais que desejo representar no numero
    atualiizarvalorFinal();
}

function atualiizarvalorFinal(){
    const valor1 = parseFloat(total1.textContent) ||0;
    const valor2 = parseFloat(total2.textContent) ||0;
    const valor3 = parseFloat(total3.textContent) ||0;
    const valor4 = parseFloat(total4.textContent) ||0;
    ValorFinal.textContent = (valor1+valor2+valor3+valor4). toFixed(2);
}



quantidade1.addEventListener('input', calcularTotal1);
preco1.addEventListener('input', calcularTotal1);

quantidade2.addEventListener('input', calcularTotal2);
preco2.addEventListener('input', calcularTotal2);

quantidade3.addEventListener('input', calcularTotal3);
preco3.addEventListener('input', calcularTotal3);

quantidade4.addEventListener('input', calcularTotal4);
preco4.addEventListener('input', calcularTotal4);