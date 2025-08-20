//O que é um objeto?
/*Um objeto é uma representação de algo da vida real, porém somente com as suas caracteristicas importantes, ele é uma instancia da classe*/

//O que é uma classe?
/*Uma classe é um molde ou modelo para criar objetos. Ela define os atributos ou propriedades (dados) e métodos (ações) que o objeto terá*/

//Exemplo:
/*
 Classe: Carro
    Atributos: cor, modelo, ano, marca, estado
    Métodos: ligar(), desligar(), acelerar(), frear()

    Objeto: Uno
    Atributos: vermelho, 2010, Fiat, novo  
    Métodos: ligar(), desligar(), acelerar(), frear() 
*/

//Como usar?

//Esse é o modelo:
class Carro {
    constructor(cor, modelo, ano, marca, estado) {
        this.cor = cor
        this.modelo = modelo
        this.ano = ano
        this.marca = marca
        this.estado = estado
    }
    ligar() {
        console.log('O carro está ligando!')
    }
    desligar() {
        console.log('O carro está desligando!')
    }
    acelerar() {
        console.log('O carro está acelerando!')
    }
    frear() {
        console.log('O carro está freando!')
    }
}

//Como criar o carro (objeto):
let carro = new Carro('vermelho', 'Uno', 2010, 'Fiat', 'novo')

//Como usar os métodos do carro:
console.log(carro.ligar()) //O carro está ligando! 
console.log(carro.desligar()) //O carro está desligando!
console.log(carro.acelerar()) //O carro está acelerando!
console.log(carro.frear()) //O carro está freando!

//Como o objeto fica:

let objCarro {
    cor: 'vermelho',
    modelo: 'Uno',
    ano: 2010;
ligar() function() {
    console.log('O carro está ligando!')
},
}

//exemplo simples de sistema:

class Cliente {
    constructor(nome, email, idade, saldo) {
        this.nome = String(nome),
            this.email = String(email),
            this.idade = Number(idade),
            this.saldo = Number(saldo),
    }
}

//Registrar um cliente:

let cliente = new Cliente('João', 'Joao@gmail.com', 25, 1000)


class Pedido {
    constructor(produto, valor, quantidade, status) {
        this.produto = String(produto),
            this.valor = Number(valor),
            this.quantidade = Number(quantidade),
            this.status = String(status),
    }
}