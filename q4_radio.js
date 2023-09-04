var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = 12;
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio(12);
console.log(r.volume);
