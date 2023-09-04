class Radio {
    volume : number = 12;

    constructor (volume : number) {
        this.volume = volume;
    }
}

let r : Radio = new Radio(12);
console.log(r.volume);

