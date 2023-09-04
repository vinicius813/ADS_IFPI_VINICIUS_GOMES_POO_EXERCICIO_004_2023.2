var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.ladoA = a;
        this.ladoB = b;
        this.ladoC = c;
    }
    Triangulo.prototype.verificaTriangulo = function () {
        return Math.abs(this.ladoB - this.ladoC) < this.ladoA && this.ladoA < this.ladoB + this.ladoC;
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (!this.verificaTriangulo())
            return false;
        return this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC;
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.verificaTriangulo())
            return false;
        return this.ladoA === this.ladoB && this.ladoA === this.ladoC;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.verificaTriangulo())
            return false;
        return this.ladoA !== this.ladoB || this.ladoA !== this.ladoC || this.ladoB !== this.ladoC;
    };
    return Triangulo;
}());
// Testando a classe Triângulo com diferente tipos de triângulos
var triangulo1 = new Triangulo(3, 4, 5);
console.log("O Triângulo 1 será: ");
console.log("O Triângulo 1 será isósceles?", triangulo1.ehIsosceles());
console.log("O Triângulo 1 erá equilátero?", triangulo1.ehEquilatero());
console.log("O Triângulo 1 será escaleno?", triangulo1.ehEscaleno());
var triangulo2 = new Triangulo(3, 3, 3);
console.log("O Triângulo 2 será: ");
console.log("O Triângulo 2 será isósceles?", triangulo2.ehIsosceles());
console.log("O Triângulo 2 será equilátero?", triangulo2.ehEquilatero());
console.log("O Triângulo 2 será escaleno?", triangulo2.ehEscaleno());
var triangulo3 = new Triangulo(5, 12, 13);
console.log("O Triângulo 3 será: ");
console.log("O Triãngulo 3 será isósceles?", triangulo3.ehIsosceles());
console.log("O Triângulo 3 será equilátero?", triangulo3.ehEquilatero());
console.log("O Triângulo 3 será escaleno?", triangulo3.ehEscaleno());
