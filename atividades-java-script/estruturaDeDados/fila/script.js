/*Da mesma forma como o modelo, considerando uma fila de números inteiros de tamanho 3 que inicialmente está vazia, realize e apresente por meio de operações: 

Enfileirar();

ElementoInicio();

Mostrar();

Desenfileirar();

*/

let fila = [];

function enfileirar() {
    if (fila.length <= 2) {
        let n = window.prompt('Digite um número inteiro:')
        fila.push(n)
    } else {
        window.alert('Fila cheia!')
    }
};

function elementoInicio() {
    window.document.getElementById('filaVisivel').innerHTML = fila[0]
};

function mostrar() {
    window.document.getElementById('filaVisivel').innerHTML = fila
};

function desenfileirar() {
    fila.shift()
    mostrar()
}