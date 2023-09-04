class Jogador {
    private forca : number;
    private nivel : number;
    private pontosAtuais : number;

    constructor (forca : number, nivel : number, pontosAtuais : number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque() : number {
        return this.forca * this.nivel;
    }

    atacar (atacado : Jogador) : void {
        if (!atacado.estaVivo()) {
            console.log("O jogador atacado não está vivo. Ignorar ataque!");
        return;
        }

    const dano = this.calcularAtaque();
    atacado.receberDano(dano);
    console.log(`Atacou com ${dano} pontos de dano.`);
    }

    receberDano(dano : number) : void {
        this.pontosAtuais -= dano;
        if (this.pontosAtuais < 0) {
            this.pontosAtuais = 0;
        }
    }

    estaVivo() : boolean {
        return this.pontosAtuais > 0;
    }

    toString() : string {
        return `Força: ${this.forca}, Nível: ${this.nivel}, Pontos Atuais: ${this.pontosAtuais}`;
    }
}

// Testando a classe Jogador com dois jogadores instanciados e inicializados 
const jogador1 = new Jogador(10, 5, 100);
const jogador2 = new Jogador(8, 6, 120);

console.log("Jogador 1:", jogador1.toString());
console.log("Jogador 2", jogador2.toString());

jogador1.atacar(jogador2);

console.log("Jogador 1 após o ataque:", jogador1.toString());
console.log("Jogadr 2 após o ataque:", jogador2.toString());

if (jogador1.estaVivo() && jogador2.estaVivo()) {
    if (jogador1.estaVivo() && jogador2.estaVivo()) {
        if (jogador1.estaVivo() && jogador2.estaVivo()) {
            console.log("Ambos os jogadores estão vivos.");
        }else if (jogador1.estaVivo()) {
            console.log("O jogador 1 está vivo.");
        }else if (jogador2.estaVivo()) {
            console.log("O jogador 2 está vivo.");
        }else{
            console.log("Ambos os jogadores estão mortos.");
        }
    }
}


 
    