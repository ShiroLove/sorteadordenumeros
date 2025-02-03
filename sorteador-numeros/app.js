function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);


    if(doNumero > ateNumero){
        alert("O Número inicial deve ser menor que o número final");
        reiniciar();
        return;
    }
    
    let numeroSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(doNumero,ateNumero);
    
        while(numeroSorteados.includes(numero)){
        numero = gerarNumeroAleatorio(doNumero,ateNumero);
        }
  numeroSorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">Numeros Sorteados: ${numeroSorteados}</label>`;
    alterarStatusBotaoReiniciar();
 }

function gerarNumeroAleatorio(min,max){
    return  Math.floor(Math.random() * (max - min +1)) + min;

}
function alterarStatusBotaoReiniciar(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
     botaoReiniciar.classList.remove('container__botao-desabilitado');
            botaoReiniciar.classList.add('container__botao');
    }else{
        botaoReiniciar.classList.remove('container__botao');
             botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Numeros Sorteados: </label>`;
    alterarStatusBotaoReiniciar();
}