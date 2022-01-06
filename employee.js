//Example1
var Employee = /** @class */ (function () {
    function Employee(eid, ename, esalary) {
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;
    }
    Employee.prototype.display = function () {
        console.log(this.eid + this.ename + this.esalary);
    };
    return Employee;
}());
var employee = new Employee(1, 'ABC', 20000);
employee.display();
//Example2
var Shape = /** @class */ (function () {
    function Shape(length, breadth) {
        this.length = length;
        this.breadth = breadth;
        this.length = length;
        this.breadth = breadth;
    }
    Shape.prototype.area = function () {
        console.log(this.length * this.breadth);
    };
    return Shape;
}());
var rec = new Shape(2.3, 3.4);
rec.area();
//Example3
var Simplify = /** @class */ (function () {
    function Simplify(a, b, c, d, e) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
    Simplify.prototype.operation = function () {
        console.log(this.a * this.b + this.c - this.d / this.e);
    };
    return Simplify;
}());
var op = new Simplify(5, 4, 3, 2, 1);
console.log(op);
//Example4
var SimpleInterest = /** @class */ (function () {
    function SimpleInterest(principal, time, rate) {
        this.principal = principal;
        this.time = time;
        this.rate = rate;
        this.principal = principal;
        this.time = time;
        this.rate = rate;
    }
    SimpleInterest.prototype.SI = function () {
        console.log((this.principal * this.time * this.rate) / 100);
    };
    return SimpleInterest;
}());
var si = new SimpleInterest(10000, 2, 3.5);
si.SI();
//Example5
var AddNum = /** @class */ (function () {
    function AddNum() {
        this.num1 = 3;
        this.num2 = 4.5;
        this.num3 = 8.6;
    }
    AddNum.prototype.add = function () {
        console.log(this.num1 + this.num2 + this.num3);
    };
    return AddNum;
}());
var sum = new AddNum();
console.log(sum);
