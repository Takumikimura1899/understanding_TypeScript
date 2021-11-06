class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department:' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();

// 以下のコードのように外部からアクセスするとバリデーションなどの処理を無視してしまう恐れがあるので、
// アクセス方法を内部のみに制御する。private デフォルトではpublic
// accounting.employees[2] = 'Anna';

const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();
