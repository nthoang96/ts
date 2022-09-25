// Code
abstract class Department {
  static fiscalYear = 2020;
  //   private readonly id: string;
  //   public name: string;
  //   private employees: string[] = [];
  protected employees: string[] = []; // Protected help to connect with sub-class

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;

    // console.log(this.fiscalYear) // error
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = 'd2'
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const accounting = new Department("d1", "Accounting");
// console.log(accounting);

// accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // If not defined the key name will get an error
// accountingCopy.describe();

// accounting.addEmployee("Max");
// accounting.addEmployee("Alex");

// accounting.employees[2] = "Anna"; // error when set property to private

// accounting.printEmployeeInformation();

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(this: Department): void {
    console.log("IT Department");
  }
}

const newIT = new ITDepartment("d2", ["Max"]);
newIT.describe();
console.log(newIT);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // Singleton

  private constructor(id: string, private reports: string[]) {
    // Singleton
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    // Singleton
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

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReports(value);
  }

  describe(this: Department): void {
    console.log("Accouting department");
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReports(newReport: string) {
    this.reports.push(newReport);
    this.lastReport = newReport;
  }
}

const newAcc = AccountingDepartment.getInstance();
newAcc.mostRecentReport = "";

console.log(newAcc.mostRecentReport);

newAcc.addReports("This is report....");

console.log(newAcc);

// Static
Department.createEmployee("Justin");
Department.fiscalYear;

