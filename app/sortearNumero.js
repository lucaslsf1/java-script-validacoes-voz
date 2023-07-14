const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
};

//Criar variaveis para menor valor e maior valor e depois alterar os spans para mostrá-los

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
