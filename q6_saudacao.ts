class Saudacao {
    private texto : string;
    private destinatario : string;

    constructor (texto :string, destinatario : string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao() : string {
        return `${this.texto}, ${this.destinatario}`;
    }
}   

// Testando a classe Saudação
const saudacaoExemplo = new Saudacao("Bom Dia", "João!");
console.log(saudacaoExemplo.obterSaudacao());
