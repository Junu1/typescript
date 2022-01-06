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






