const fibo = (x) => {
  if (x === 0 || x === 1) {
    return x
  }
  return fibo(x - 1) + fibo(x - 2)
}

// module.exports = fibo

class Animal {
  constructor(age) {
    this.age = age
  }

  age() {
    return `the dogs age is ${this.age}`
  }

  isBaby() {
    this.age < 1 ? true : false
  }
}

const catAge = new Animal(0)
console.log(catAge)

class Dogs extends Animal {
  constructor(age, color) {
    super(age)
    this.color = color
  }

  dogDescription() {
    return `The dog's eye color is ${color} and is ${age} years young`
  }
}
const dog = new Dogs(0, 'white')
const dog2 = new Dogs(5, 'red')
const dog3 = new Dogs(6, 'blue')

const dogs = [dog, dog2, dog3]

const babyDog = dogs.filter((f) => dog.age < 1)
console.log(babyDog)

console.log(dogs)

console.log(dogs)

console.log(dog)
