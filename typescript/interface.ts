interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

const tom: Person = {
  id: 1,
  name: 'Tom',
  gender: 'male'
}