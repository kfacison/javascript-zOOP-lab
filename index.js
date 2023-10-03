class Animal {
    constructor(name, species, age, gender){
        this.name = name
        this.species = species
        this.age = age
        this.gender = gender  
    }

    describe(){
        console.log(`This is ${this.species} is named ${this.name}. They are ${this.age} year-old ${this.gender}!`)
    }

    feed(){
        console.log(`${this.name} is eating.`)
    }

    makeSound(){
        console.log(`${this.name} is making a sound.`)
    }

    move(){
        console.log(`${this.name} is moving.`)
    }   
}

//Instantiate
const tony = new Animal('tony','tiger','5','best boy')

//Tests
    // console.log(tony)
    // tony.describe()
    // tony.feed()
    // tony.makeSound()
    // tony.move()

//Extending to a subclass
class Mammal extends Animal {
    constructor(name, species, age, gender, furColor){
        super(name, species, age, gender)
        this.furColor = furColor
    }

    describe(){
        console.log(`This ${this.species} is named ${this.name} and has ${this.furColor} fur. They are a ${this.age} year-old ${this.gender}!`)
    }

    feed(){
        console.log(`${this.name} is drinking milk.`)
    }

    makeSound(){
        console.log(`${this.name} is howling.`)
    }

    move(){
        console.log(`${this.name} is walking.`)
    }   

}

class Bird extends Animal {
    constructor(name, species, age, gender, wingspan){
        super(name, species, age, gender)
        this.wingspan = wingspan
    }

    describe(){
        console.log(`This ${this.species} is named ${this.name} and has ${this.wingspan} wings. They are a ${this.age} year-old ${this.gender}!`)
    }

    feed(){
        console.log(`${this.name} is drinking nectar.`)
    }

    makeSound(){
        console.log(`${this.name} is humming.`)
    }

    move(){
        console.log(`${this.name} is flitin'round.`)
    }   

}

class Reptile extends Animal {
    constructor(name, species, age, gender, scaleColor){
        super(name, species, age, gender)
        this.scaleColor = scaleColor
    }

    describe(){
        console.log(`This ${this.species} is named ${this.name} and has ${this.scaleColor} scales. They are a ${this.age} year-old ${this.gender}!`)
    }

    feed(){
        console.log(`${this.name} is munching on mice.`)
    }

    makeSound(){
        console.log(`${this.name} is hissing.`)
    }

    move(){
        console.log(`${this.name} is lumberin'long.`)
    }   

}

//Instantiate
    const louis = new Mammal('king louis','orangutang','12','king of the jungle','orange')
    const flit = new Bird('flit','hummingbird','two','speedy','3in')
    const ticToc = new Reptile('tic-toc','gator','twelve','knobby','iridescent pink')

//Tests
    // louis.describe()
    // louis.feed()
    // louis.makeSound()
    // louis.move()

class Zoo {
    constructor(){
        this.animalsArr = []
    }

    addAnimal(newAnimal){
        this.animalsArr.push(newAnimal)
        //console.log(this.animalsArr)
    }
    
    displayAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.describe()
        })
    }

    feedAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.feed()
        })
    }

    listenToAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.makeSound()
        })
    }

    watchAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.move()
        })
    }
}

//Instatiate
    const zoolanderZoo = new Zoo()

//Tests
    zoolanderZoo.addAnimal(louis)
    zoolanderZoo.addAnimal(tony)
    zoolanderZoo.addAnimal(flit)
    zoolanderZoo.addAnimal(ticToc)
    zoolanderZoo.displayAnimals()
    zoolanderZoo.feedAnimals()
    zoolanderZoo.listenToAnimals()
    zoolanderZoo.watchAnimals()