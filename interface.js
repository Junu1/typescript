;
var Square = /** @class */ (function () {
    function Square(length) {
        this.length = length;
    }
    Square.prototype.area = function () {
        console.log(this.length * this.length);
    };
    return Square;
}());
var a = new Square(4);
a.area();
;
var Person1 = /** @class */ (function () {
    function Person1() {
        this.first_name = 'Junu';
        this.last_name = 'Danuwar';
        this.age = 24;
    }
    Person1.prototype.display_details = function () {
        console.log(this.first_name + this.last_name + this.age);
    };
    return Person1;
}());
var p = new Person1();
p.display_details();
;
var Addition = /** @class */ (function () {
    function Addition() {
        this.a = 5.55;
        this.b = -3;
    }
    Addition.prototype.sum = function () {
        console.log(this.a + this.b);
    };
    Addition.prototype.subtract = function () {
        console.log(this.a - this.b);
    };
    return Addition;
}());
var calc = new Addition();
calc.sum();
calc.subtract();
