var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario);
    };
    return Saudacao;
}());
// Testando a classe Saudação
var saudacaoExemplo = new Saudacao("Bom Dia", "João!");
console.log(saudacaoExemplo.obterSaudacao());
