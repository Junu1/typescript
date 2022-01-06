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
