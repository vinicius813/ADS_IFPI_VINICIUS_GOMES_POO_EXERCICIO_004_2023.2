var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (!atacado.estaVivo()) {
            console.log("O jogador atacado não está vivo. Ignorar ataque!");
            return;
        }
        var dano = this.calcularAtaque();
        atacado.receberDano(dano);
        console.log("Atacou com ".concat(dano, " pontos de dano."));
    };
    Jogador.prototype.receberDano = function (dano) {
        this.pontosAtuais -= dano;
        if (this.pontosAtuais < 0) {
            this.pontosAtuais = 0;
        }
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontosAtuais > 0;
    };
    Jogador.prototype.toString = function () {
        return "For\u00E7a: ".concat(this.forca, ", N\u00EDvel: ").concat(this.nivel, ", Pontos Atuais: ").concat(this.pontosAtuais);
    };
    return Jogador;
}());
// Testando a classe Jogador com dois jogadores instanciados e inicializados 
var jogador1 = new Jogador(10, 5, 100);
var jogador2 = new Jogador(8, 6, 120);
console.log("Jogador 1:", jogador1.toString());
console.log("Jogador 2", jogador2.toString());
jogador1.atacar(jogador2);
console.log("Jogador 1 após o ataque:", jogador1.toString());
console.log("Jogadr 2 após o ataque:", jogador2.toString());
if (jogador1.estaVivo() && jogador2.estaVivo()) {
    if (jogador1.estaVivo() && jogador2.estaVivo()) {
        if (jogador1.estaVivo() && jogador2.estaVivo()) {
            console.log("Ambos os jogadores estão vivos.");
        }
        else if (jogador1.estaVivo()) {
            console.log("O jogador 1 está vivo.");
        }
        else if (jogador2.estaVivo()) {
            console.log("O jogador 2 está vivo.");
        }
        else {
            console.log("Ambos os jogadores estão mortos.");
        }
    }
}
