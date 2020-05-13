class Animal  {
  // public 表示公有属性或方法
  // protected 该类只允许被继承
  // private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
  // readonly 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
  // static 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
  // <public | protected | readonly | static> name: string
  name: string
  static category: string[] = ['poikilotherm', 'mammal']
  static isAnimal(animalName){
    return animalName instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}



class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
class Cat extends Animal {
	constructor(name) {
		super(name) // 使用 super 调用父类方法
		console.log(this.name)
	}
	run() { // 重写run，不会影响父类
		return 'Meow ' + super.run()
	}
}
const snanke = new Animal('🐍')
const shibaInu = new Dog('🐕')
const americanShorthair = new Cat('🐱')
console.log(americanShorthair.name)
console.log(snanke.run())
console.log(shibaInu.run(), shibaInu.bark())
console.log(americanShorthair.run())
console.log(Animal.category)
console.log(Animal.isAnimal(shibaInu))



interface Alarm {
  alert()
}

//类实现接口
interface Light {
  lightOn()
  lightOff()
}

class Car implements Alarm, Light {
  alert() {
      console.log('Car alert')
  }
  lightOn() {
      console.log('Car light on')
  }
  lightOff() {
      console.log('Car light off')
  }
}

// 接口继承接口
interface Alarm {
  alert()
}

interface LightableAlarm extends Alarm {
  lightOn()
  lightOff()
}

// 接口继承类
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}