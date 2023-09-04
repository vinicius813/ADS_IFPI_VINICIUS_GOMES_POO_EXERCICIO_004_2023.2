class Equipamento {
    private ligado : boolean = false;

    liga() : void {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O equipamento está ligado!");
        }else{
            console.log("O equipamento já estava ligado!");
        }
    }

    desliga() : void {
        if (this.ligado) {
            this.ligado = false;
            console.log("O equipamento está desligado!");
        }else{
            console.log("O equipamento já estava desligado!");
        }
    }

    inverte() : void {
        this.ligado = !this.ligado;
        if (this.ligado) {
            console.log("O equipamento está ligado!");
        }else{
            console.log("O equipamento encontra-se desligado!");
        }
    }

    estaLigado() : boolean {
        return this.ligado;
    }
}

// Testando a classe Equipamento seguindo as especificações da questão dada
const equipamento = new Equipamento();

console.log("O equipamento está ligado?", equipamento.estaLigado());

equipamento.liga();
console.log("O equipamento está ligado?", equipamento.estaLigado());

equipamento.liga();  // Tentando ligar novamente
console.log("O equipamento está ligadp novamente?", equipamento.estaLigado());

equipamento.desliga();
console.log("O equipamento está ligado?", equipamento.estaLigado());

equipamento.desliga();  // Tentando desligar novamente
console.log("O equipamento está ligado?", equipamento.estaLigado());

equipamento.inverte();
console.log("O equipamento está ligado?", equipamento.estaLigado());

equipamento.inverte();
console.log("O equipamento está ligado?", equipamento.estaLigado());



 


