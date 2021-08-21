//Function

const square = (side: number): number => side * side

console.log(square(3))

let greet: Function

greet = (): any => console.log('hello function')

greet()

const add = (a: number, b: number, c: number = 0): number => {
    return a + b + c
}

console.log("add === ", add(1, 2))