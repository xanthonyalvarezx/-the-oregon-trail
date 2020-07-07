let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude) // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt() // Henrietta goes in search of food.
juan.eat() // Juan eats – as Juan does. 🤣
juan.eat() // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)

const main = document.querySelector('main')
let currentTravelers = document.createElement('div')
currentTravelers.id = 'wagon1'
main.append(currentTravelers)
currentTravelers.append(JSON.stringify(juan),' ', JSON.stringify(maude),' ', JSON.stringify(henrietta))

let seats = document.createElement('div')
seats.id = 'wagonCapacity'
seats.append('Seats available:',' ', wagon.getAvailableSeatCount())
main.append(seats)

let food = document.createElement('div')
food.id = 'totalFood'
food.append('Total food :',' ', wagon.totalFood())
main.append(food)

let quarentine = document.createElement('div')
quarentine.id = 'shouldQuarentine'
quarentine.append('shouldQuarentine:',' ', wagon.shouldQuarantine())
main.append(quarentine)

