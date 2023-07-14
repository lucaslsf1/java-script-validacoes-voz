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
            <button id="btn-jogar" class="btn-jogar"> Jogar novamente </button>
        `
    } else if (numero > numeroSecreto) { //Caso o número seja menor que o secreto porém válido
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else { //Caso o número seja maior que o secreto porém válido
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'btn-jogar') {
        window.location.reload();
    };
});

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function maiorOuMenorQueONumeroSecreto(numero) {
    return numero > maiorValor || numero < menorValor;
};