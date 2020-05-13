function sum(x: number, y: number): number {
  return x + y
}
sum(1,2)

// 类型推论 let str = 'string'
let mySum = function (x: number, y: number): number {
  return x + y
} 
// 手动给 mySum 添加类型
let Sum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}