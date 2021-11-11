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


const createPassword = (name: string, password?: string | number) => `${name}${password}`