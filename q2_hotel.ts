class Hotel {
    idApartamento : number = 543;
    quantReservas : number = 51;
   
   constructor(idApartamento : number, quantReservas : number) {
                    this.idApartamento = idApartamento;
                    this.quantReservas = quantReservas;
   }
}
    this.quantReservas++;
       
let hotel1 : Hotel = new Hotel(543, 51);
console.log(hotel1.idApartamento);
console.log(hotel1.quantReservas)


