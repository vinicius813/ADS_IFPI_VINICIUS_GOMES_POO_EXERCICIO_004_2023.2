class Conta {
    constructor (private numero : string, private saldo : number) {}

    sacar (valor : number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }else{
            console.log("Saldo insuficiente.");
        }
    }

    transferir (destino : Conta, valor : number) {
        if (this.saldo >= valor) {
            this.sacar(valor);
            destino.depositar(valor);
        }else{
            console.log("Saldo insuficiente para tranferência.");
        }
    }

    depositar (valor : number) {
        this.saldo += valor;
    }

    consultarSaldo() {
        return this.saldo;
    }

}

let c1 : Conta = new Conta("1", 100);
let c2 : Conta = new Conta("2", 100);
let c3 : Conta;

c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2, 50);

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());


  




