const user = {
  name: 'levani ',
  lastname: 'gvari',
  age: 24,
  isSmoker: false,
  sayHello: () => {
    console.log('hi woeld');
  },
};
//!
// for (let key in user) {
//   if (typeof user[key] !== 'string') {
//     delete user[key];
//   }
// }

//!
// const keys = Object.keys(user);
// keys.forEach((el) => {
//   if (typeof user[el] !== 'string') {
//     delete user[el];
//   }
// });

// console.log(user, 'keys');

// console.log(keys, 'keys');
//!
// const values = Object.values(user);
// console.log(values, 'use');

//!
// const keyValues = Object.entries(user);
// console.log(keyValues, 'keyValue');

// for (let [key, value] of Object.entries(user)) {
//   console.log(key, 'key');
//   console.log(value, 'value');
// }
//!

// if (user.name) {
//   console.log('rame');
// }

// if (user.hasOwnProperty('isSmoker')) {
//     console.log('rame');
//   }

//! class

// class Student {

//   name = 'levani';
//   age = 31;

//   sayHello(name) {
//     console.log(`helo ${name}`);
//   }
// }

// const student1 = new Student();

// console.log(student1.name);
// student1.sayHello('giorig');
//!
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //   sayHello(greetingName) {
//   //     console.log(`helo ${greetingName}`);
//   //   }
//   sayHello() {
//     console.log(`helo ${this.name}`);
//   }
// }

// const student1 = new Student('giorgi', 19);

// console.log(student1.name);
// student1.sayHello('giorig');

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //   sayHello(greetingName) {
//   //     console.log(`helo ${greetingName}`);
//   //   }
//   sayHello() {
//     console.log(`helo ${this.name}`);
//   }
// }

// const student1 = new Student('George', 19);

// console.log(student1.name);
// student1.sayHello();
//!

// class Student {
//   #name = 'giorgi';

//   sayHello() {
//     console.log(`hello ${this.#name}`);
//   }
// }

// const student1 = new Student();

// console.log(student1.name);

//! interperens

// class Animal {
// constructor(name, age) {
//   this.name = name;
//   _this.age = age;
// }

// alive() {
//   console.log('alive');
// }
// }

// class Dog extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   bark() {
//     console.log('barkink');
//   }
// }

// const dog1 = new Dog('jeka', 5, 'red');

// class Fish {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log('swimming');
//   }
// }

// const fish1 = new Dog('nemo', 2);

// class Chicken {
//   constructor(name) {
//     this.name = name;
//   }

//   bark() {
//     console.log('flying');
//   }

//   alive() {
//     console.log('alive');
//   }
// }

// const chicken1 = new Dog('nemo', 2);

//!

class Calculator {
  #number = 0;
  constructor(number) {
    this.number = number;
  }

  add(num) {
    this.#number += num;
    return this;
  }

  sub(num) {
    this.#number -= num;
    return this;
  }

  multi(num) {
    this.#number *= num;
    return this;
  }

  divede(num) {
    this.#number /= num;
    return this;
  }

  getResult() {
    console.log(this.#number);
  }
}

const calc1 = new Calculator(0);

calc1.add(10).multi(2).sub(12).getResult();
//!
//
// class BankAcount {
//   #balance = 0;
//   constructor(balance) {
//     this.balance = balance;
//   }

//   Deposite() {
//     return this.balance;
//   }

//   withDraw(draw) {
//     this.balance + draw;
//     return balance;
//   }
// }

// const user1 = new BankAcount(0);

// console.log(user1.Deposite());
// console.log(user1.withDraw(5));

class BankAcount {
  #balance = 0;
  #history = [];

  deposite(amount) {
    this.#balance += amount;
    this.addHistory('deposite', this.#balance);
  }

  withDraw(amount) {
    if (amount > this.#balance) {
      console.log('this operatin cant be handled');
      return;
    }
    this.#balance -= amount;
    this.addHistory('withdraw', this.#balance);
  }

  transferMoneyToSomeone(amount) {
    if (amount > this.#balance) {
      console.log('this operatin cant be handled');
      return;
    }
    this.#balance -= amount;
    this.addHistory('transfer', this.#balance, personId);
  }

  addHistory(type, amount, personId) {
    const history = {
      type,
      amount,
      data: new Date().toISOString(),
    };
    if (personId) {
      history.personId = personId;
    }
    this.#history.push(history);
  }

  getBalance() {
    console.log(this.#balance);
  }

  getTransactionHistory() {
    console.log(this.#history);
  }
}

const giorgisBank = new BankAcount();
giorgisBank.deposite(1000);
giorgisBank.transferMoneyToSomeone(300, 'sada1214');
giorgisBank.getBalance();
giorgisBank.getTransactionHistory();
