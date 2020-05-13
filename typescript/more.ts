jQuery('#a').append()
// 类型别名 type aliases
type PlusType = (x: number, y: number) => number
function sum1(x: number, y: number) {
  return x + y
}
const sum2:PlusType = sum1
// 联合类型
type NameResolver = () => string
type NameOrRsolver = string | NameResolver
function getName(n: NameOrRsolver) {
  if(typeof n === 'string') {
     return n
  } else {
    return n()
  }
}

// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// <类型>值  or 值 as 类型

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// function getLength(something: string | number): number {
// return something.length // 类型“number”上不存在属性“length”。
// }


function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length
  } else {
      return something.toString().length
  }
}

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
// function toBoolean(something: string | number): boolean {
//   return <boolean>something // 类型“number”不可与类型“boolean”进行比较。
// }