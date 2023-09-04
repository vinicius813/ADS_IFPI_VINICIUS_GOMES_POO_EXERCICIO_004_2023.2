var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saldo positivo ou suficiente.");
            return true;
        }
        else {
            console.log("Saldo insuficiente.");
            return false;
        }
    };
    Conta.prototype.transferir = function (destino, valor) {
        if (this.saldo >= valor) {
            this.sacar(valor);
            destino.depositar(valor); //  Referência ao destino da classe Conta
            console.log("Saldo positivo ou suficiente.");
            return true;
        }
        else {
            console.log("Saldo insuficiente para tranferência.");
            return false;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
