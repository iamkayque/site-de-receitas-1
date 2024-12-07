function calcular() {
    //selecione todasd as linhasd da tabela
    const linhas = document.querySelectorAll("table tr");
    let total1 = 0; //variavel para amarzenar o total geral

    //itera sobre as linhas da tabela
    linhas.forEach((linha, index) => {
        if (index > 0 && index < linhas.length - 1) {

            const preco = linhas.querySelector(".preco").value;

            const quantidade = linha.querySelector(".qtd").value;

            const total1 = preco * quantidade || 0;

            linha.querySelector(".tot").textContent = total1.toFixed(2);

            tot += total1; 

        }

    });

    document.getElementById("tot").textContent = totalFinal.toFixed(2);
}