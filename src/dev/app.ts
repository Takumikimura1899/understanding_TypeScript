class Department {
  // private id:string;
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2"
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    //ベースクラスのconstructorを呼び出すことができる
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    //ベースクラスのconstructorを呼び出すことができる
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountDepartment('d2', []);
accounting.addReport('Something');
accounting.printReports();

// 以下のコードのように外部からアクセスするとバリデーションなどの処理を無視してしまう恐れがあるので、
// アクセス方法を内部のみに制御する。private デフォルトではpublic
// it.employees[2] = 'Anna';

// const itCopy = { name: 'Dummy', describe: it.describe };
// itCopy.describe();
