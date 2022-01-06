//Example1
class Employee {
    eid: number;
    ename: string;
    esalary: number;

    constructor(eid: number, ename: string, esalary: number) {
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;
    }

    display(): void {
        console.log(this.eid + this.ename + this.esalary);
    }

}

let employee = new Employee(1, 'ABC', 20000);
employee.display();

//Example2
class Shape {
    constructor(private length: number, private breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }
    area(): void {
        console.log(this.length * this.breadth);
    }
}

let rec = new Shape(2.3, 3.4);
rec.area();

//Example3
class Simplify {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;

    constructor(a, b, c, d, e) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;

    }
    operation(): void {
        console.log(this.a * this.b + this.c - this.d / this.e);

    }
}
let op = new Simplify(5, 4, 3, 2, 1);
console.log(op);

//Example4

class SimpleInterest {
    constructor(private principal: number, private time: number, private rate: number) {
        this.principal = principal;
        this.time = time;
        this.rate = rate;
    }
    SI(): void {
        console.log((this.principal * this.time * this.rate) / 100);
    }
}
let si = new SimpleInterest(10000, 2, 3.5);
si.SI();

//Example5

class AddNum {
    num1: number = 3;
    num2: number = 4.5;
    num3: number = 8.6;

    add(): void {
        console.log(this.num1 + this.num2 + this.num3);

    }
}
let sum = new AddNum();
sum.add();






