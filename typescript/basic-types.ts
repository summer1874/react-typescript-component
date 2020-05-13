const isDone: boolean = false

const age: number = 18
const binaryNumber = 0b1111

const firstName: string = 'summer'
const message: string = `hello ${firstName}, age is ${age}`

const u: undefined = undefined
const n: null = null

const num: number = undefined
const num1: number = null


function alertName(): void {
    alert('My name is Tom')
}
let unusable: void = undefined

let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7
let anyThing: any = 'hello'
console.log(anyThing.myName)
console.log(anyThing.myName.firstName)
anyThing.setName('Jerry')
anyThing.setName('Jerry').sayHello()
anyThing.myName.setFirstName('Cat')

let favoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7

const user: [string, number] = ['summer', 18]

