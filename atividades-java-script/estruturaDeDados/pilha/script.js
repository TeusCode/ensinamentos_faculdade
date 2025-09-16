/*Desenvolva um algoritmo que recebe do usuário cinco números inteiros numa pilha com capacidade para cinco números e mostra esses números*/
const mostrarEmpilhar = document.getElementById ('pilha');
let pilha = [];

function empilhar() {
    for (let i = 1; i <= 5; i++) {
        const entrada = window.prompt('Digite um número:')

        pilha.push(entrada)
    }
    window.alert('O algoritmo terminou!')
};

function mostrarPilha() {
    for (let i = 0; i <= 4; i++) {
        mostrarEmpilhar.innerHTML += `<p> item ${pilha[4-i]}</p>`
    }
};


