//Example1
interface Shape {
    area(): void;
};
class Square implements Shape {
    length: number;

    constructor(length: number) {
        this.length = length;
    }
    area(): void {
        console.log(this.length * this.length);
    }
}
let a = new Square(4);
a.area();

//Example2
interface Person {
    first_name: string;
    last_name: string;
    age: number;
    display_details(): void;
};
class Person1 implements Person {
    first_name: string = 'Junu';
    last_name: string = 'Danuwar';
    age: number = 24;

    display_details(): void {
        console.log(this.first_name + this.last_name + this.age);
    }
}
let p = new Person1();
p.display_details();

//Example3
interface Calculation {
    sum(): void;
    subtract(): void;
};
class Addition implements Calculation {
    a: number = 5.55;
    b: number = -3;
    sum(): void {
        console.log(this.a + this.b);
    }
    subtract(): void {
        console.log(this.a - this.b);
    }
}
let calc = new Addition();
calc.sum();
calc.subtract();


