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

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //   sayHello(greetingName) {
  //     console.log(`helo ${greetingName}`);
  //   }
  sayHello() {
    console.log(`helo ${this.name}`);
  }
}

const student1 = new Student('George', 19);

console.log(student1.name);
student1.sayHello();
