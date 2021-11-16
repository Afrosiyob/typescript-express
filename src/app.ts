console.log("hello");

enum color {
  red = 1,
  green = 4,
  yellow = 3,
  blue
}


console.log(color.red);
console.log(color.green);
console.log(color.yellow);
console.log(color.blue);


const msg: string = "this is error message"

const errorFunc = (msg: string): never => {
  throw new Error(msg)
}

// errorFunc(msg)

type stum = string | number

const fefe: stum = 3

console.log(fefe);






// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "UZS",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const sum = formatter.format(2500).split("UZS")[1]; /* $2,500.00 */

let list: number[] = [1, 2, 3];
let newList: Array<any> = [1, "a"];
let door: any = false;

enum directions {
  up,
  down,
  left,
  right,
}

console.log(directions.left);



const sayHello = (name: any): void => {
  console.log(`say hello ${name}`);
};


const createPassword = (name: string, password?: string | number): string => `${name}${password}`

type Person = {
  name: string,
  age: number,
  nickName?: string,
  getPassword?: () => string
}

let user: Person = {
  name: "leo",
  age: 24
}

console.log(user);


class User {
  name: string;
  age: number;
  nickName: string;

  constructor(name: string, age: number, nickName: string) {
    this.name = name
    this.age = age,
      this.nickName = nickName
  }

  setAge(age: number) {
    this.age = age
  }

  set myAge(age: number) {
    this.age = age
  }

}

class Member {
  static firstName: string = "Joe";

  sayHi() {
    console.log(Member.firstName)
  }
}

const Joe = new Member()

Joe.sayHi()

interface Car {
  name: string,
  cycle: number,
  [propName: string]: any
}

type CarTwo = {
  name: string,
  age: number,
  [propName: string]: any
}

const getter = <T>(data: T): T => data