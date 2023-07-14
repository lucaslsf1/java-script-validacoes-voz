function verificaChuteValido(chuteFinal) {
    const numero = +chuteFinal; // Transformando o chute que vem em string em inteiro(tenta converter automaticamente ao somar +)

    if(chuteForInvalido(numero)) { //Verificando se não é um NaN
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return
    };

    if(maiorOuMenorQueONumeroSecreto(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Informe um valor entre ${menorValor} e ${maiorValor}</div>`;
        return
    };

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Parabéns! Voce Acertou.</h2>
            <h3> O número secreto era ${numeroSecreto}. </h3> 
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function maiorOuMenorQueONumeroSecreto(numero) {
    return numero > maiorValor || numero < menorValor;
};