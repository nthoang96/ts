"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department");
    }
}
const newIT = new ITDepartment("d2", ["Max"]);
newIT.describe();
console.log(newIT);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value.");
        }
        this.addReports(value);
    }
    describe() {
        console.log("Accouting department");
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReports(newReport) {
        this.reports.push(newReport);
        this.lastReport = newReport;
    }
}
const newAcc = AccountingDepartment.getInstance();
newAcc.mostRecentReport = "";
console.log(newAcc.mostRecentReport);
newAcc.addReports("This is report....");
console.log(newAcc);
Department.createEmployee("Justin");
Department.fiscalYear;
//# sourceMappingURL=classes.js.map