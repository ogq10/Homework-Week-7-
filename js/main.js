let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}


class Person{
    constructor(name, age){
        this.name = name
        this.age = age
        
    }
    printInfo = (name, age) => {
        return `Name: ${this.name} \n Age: ${this.age} \n`
    }

    one_up = age =>{
        return `Your new age is: ${this.age + 1}` 
    }

    three_up = age =>{
        return `Your new age is: ${this.age + 3}` 
    }
    
}

let person1 = new Person('Omar', 22)
let person2 = new Person('Jack', 55)

console.log(person1.printInfo())
console.log(person2.printInfo())


const checkString = (str) => {   
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
        resolve("Big Word")
        }else {
            reject("Small Number")
        }
    })
}
