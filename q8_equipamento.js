var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O equipamento está ligado!");
        }
        else {
            console.log("O equipamento já estava ligado!");
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("O equipamento está desligado!");
        }
        else {
            console.log("O equipamento já estava desligado!");
        }
    };
    Equipamento.prototype.inverte = function () {
        this.ligado = !this.ligado;
        if (this.ligado) {
            console.log("O equipamento está ligado!");
        }
        else {
            console.log("O equipamento encontra-se desligado!");
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
// Testando a classe Equipamento seguindo as especificações da questão dada
var equipamento = new Equipamento();
console.log("O equipamento está ligado?", equipamento.estaLigado());
equipamento.liga();
console.log("O equipamento está ligado?", equipamento.estaLigado());
equipamento.liga(); // Tentando ligar novamente
console.log("O equipamento está ligadp novamente?", equipamento.estaLigado());
equipamento.desliga();
console.log("O equipamento está ligado?", equipamento.estaLigado());
equipamento.desliga(); // Tentando desligar novamente
console.log("O equipamento está ligado?", equipamento.estaLigado());
equipamento.inverte();
console.log("O equipamento está ligado?", equipamento.estaLigado());
equipamento.inverte();
console.log("O equipamento está ligado?", equipamento.estaLigado());
