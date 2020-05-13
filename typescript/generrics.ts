// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 简单的例子
function echo<T>(sty: T): T {
  return sty
}

const result = echo('string')

// 多个类型参数
// function swap<T, U>(tuple: [T, U]): [U,T]  {
//   return [tuple[1], tuple[0]]
// }

let swap: <T, U>(tuple: [T, U]) => [U, T] = function <T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])
// 泛型约束
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }
// 类型“T”上不存在属性“length”。

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// loggingIdentity(7)
// 类型“7”的参数不能赋给类型“Lengthwise”的参数。
loggingIdentity({ length: 10 })
loggingIdentity([])
loggingIdentity('')

// 泛型类
class Queue<T> {
  data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

// 泛型接口
interface KeyPair<T, U> {
  key: T
  value: U
}

const kp1: KeyPair<string, number> = { key: 'string', value: 18 }
const kp2: KeyPair<number, string> = { key: 123, value: '18' }

let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

interface Iplus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function concat(a: string, b: string): string {
  return a + b
}
const a:Iplus<number> = plus
const c:Iplus<string> = concat