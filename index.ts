// ARRAY

let names: Array<number | string> = ['mai', 'nam', 'hung', 5]

names.push(4)

names.push('Huy')

console.log({ names })

let mixed2: any = { "test": [2, 'Huy2', true] }

let mixed: Array<any> = [1, 'Huy', false]

console.log({ mixed })

console.log({ mixed2 })