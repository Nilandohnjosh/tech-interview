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
// created cat object
const cat = new Animal(0)
console.log(cat)

class Dogs extends Animal {
  constructor(age, color) {
    super(age)
    this.color = color
  }

  dogDescription() {
    return `The dog's eye color is ${color} and is ${age} years young`
  }
}

// created three dog objects
const dog = new Dogs(0, 'white')
const dog2 = new Dogs(5, 'red')
const dog3 = new Dogs(6, 'blue')

// added three dogs to the dogs array
const dogs = [dog, dog2, dog3]

// goes through the dogs array and filtered out all dogs with age < 1
const babyDog = dogs.filter((dog) => dog.age < 1)
