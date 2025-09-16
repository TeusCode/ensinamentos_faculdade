/*Desenvolva um algoritmo que recebe do usuário dez números inteiros para armazenar apenas os números pares numa Fila com capacidade de dez elementos e mostra os números da Fila */

let fila = [];

for (let i = 0; fila.length <= 9; i++) {
    const entrada = window.prompt('Digite um número')
    if (entrada % 2 === 0) { //Se o resto da divisão for = 0, então é par
        fila.push(entrada)
    }
}
document.getElementById('fila').innerHTML += fila