class Triangulo {
    private ladoA : number;
    private ladoB : number;
    private ladoC : number;

    constructor (a : number, b : number, c : number) {
        this.ladoA = a;
        this.ladoB = b;
        this.ladoC = c;
    }

    private verificaTriangulo() : boolean {
        return Math.abs(this.ladoB - this.ladoC) < this.ladoA && this.ladoA < this.ladoB + this.ladoC;
    }

    ehIsosceles() : boolean {
        if (!this.verificaTriangulo()) return false;
        return this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC;
    }

    ehEquilatero() : boolean {
        if (!this.verificaTriangulo()) return false;
        return this.ladoA === this.ladoB && this.ladoA === this.ladoC;
    }

    ehEscaleno() : boolean {
        if (!this.verificaTriangulo()) return false;
        return this.ladoA !== this.ladoB || this.ladoA !== this.ladoC || this.ladoB !== this.ladoC;
    }
}

// Testando a classe Triângulo com diferente tipos de triângulos
const triangulo1 = new Triangulo(3, 4, 5);
console.log("O Triângulo 1 será: ");
console.log("O Triângulo 1 será isósceles?", triangulo1.ehIsosceles());
console.log("O Triângulo 1 erá equilátero?", triangulo1.ehEquilatero());
console.log("O Triângulo 1 será escaleno?", triangulo1.ehEscaleno());

const triangulo2 = new Triangulo(3, 3, 3);
console.log("O Triângulo 2 será: ");
console.log("O Triângulo 2 será isósceles?", triangulo2.ehIsosceles());
console.log("O Triângulo 2 será equilátero?", triangulo2.ehEquilatero());
console.log("O Triângulo 2 será escaleno?", triangulo2.ehEscaleno());

const triangulo3 = new Triangulo(5, 12, 13);
console.log("O Triângulo 3 será: ");
console.log("O Triãngulo 3 será isósceles?", triangulo3.ehIsosceles());
console.log("O Triângulo 3 será equilátero?", triangulo3.ehEquilatero());
console.log("O Triângulo 3 será escaleno?", triangulo3.ehEscaleno());










