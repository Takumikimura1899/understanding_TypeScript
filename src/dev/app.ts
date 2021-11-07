abstract class Department {
  static fiscalYear = 2021;
  // private id:string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    // 省略型で書いてる。
    return { name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // これはエラーが出る。静的ではないため。
    // console.log(this.fiscalYear);
    console.log(Department.fiscalYear);
  }

  // 抽象メソッド。サブクラスでメソッドのオーバーライドを強制する。このクラス自体にもabstractをつける必要がある。
  // ここで実装することは出来ないのでメソッド名、引数、戻り値の型定義のみ行う。
  abstract describe(this: Department): void;
  // {
  //    console.log(`Department (${this.id}): ${this.name}`);
  // }

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

  describe() {
    console.log('IT部門 - ID:' + this.id);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;

  // 値を取得する為に使用する。
  // 必ずreturnが必要。外部から.を用いてprivateの値にアクセス可能。
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません');
  }

  //必ず引数が必要。
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください。');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    //ベースクラスのconstructorを呼び出すことができる
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('会計部門 - ID:' + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
    // console.log(this.reports);
  }

  printReports() {
    console.log(this.reports);
  }

  // ベースクラスのemployeesに追加するメソッド。
  // 例えばAccount部門にMaxさんは向いてませんよーみたいなメソッド
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountDepartment('d2', []);

accounting.mostRecentReport = '通期会計レポート';
accounting.addReport('Something');
// console.log(accounting.mostRecentReport);
// accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printEmployeeInformation();
accounting.describe();

// 以下のコードのように外部からアクセスするとバリデーションなどの処理を無視してしまう恐れがあるので、
// アクセス方法を内部のみに制御する。private デフォルトではpublic
// it.employees[2] = 'Anna';

// const itCopy = { name: 'Dummy', describe: it.describe };
// itCopy.describe();

const dep = new ITDepartment('3', ['aaa']);
console.log(dep);
