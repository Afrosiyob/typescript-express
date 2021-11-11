console.log("hello");

const sayHello = (name: any): void => {
  console.log(`say hello ${name}`);
};

sayHello("leo");

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
