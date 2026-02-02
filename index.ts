type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId=1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []

/**
 * Challenge:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter.
 * Return the new pizza object (with the id added) from the function.
 */
function addNewPizza(pizzaObj: Omit<Pizza, "id">):Pizza {
    const newPizza={
        id:nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined
{
  if(typeof identifier== 'string'){
      return menu.find(pizza=>pizza.name.toLowerCase()===identifier.toLowerCase());
  }else if(typeof identifier== 'number'){
      return menu.find(pizza=>pizza.id==identifier);
  }
  else{
    throw new Error("Id or name must be number or word!");
  }
}

addNewPizza({  name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({  name: "BBQ Chicken", price: 12 })
addNewPizza({  name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Anchovy")
placeOrder("Veggie")
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)


type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}
let nextUserId=1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];
type UpdateUser= Partial<User>;

function updateUser(id: number, updates:UpdateUser) {
    let foundUser=users.find(user=>user.id==id);
    if(!foundUser){
        console.log("user not found!");
        return 
    }
    Object.assign(foundUser,updates);
}

function addNewUser(newUser: Omit<User, 'id'>): User {
    // Create a new variable called `user`, add an `id` property to it
    let user: User={
        id: nextUserId,
        ...newUser
    }
    users.push(user);
    return user
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<PlaceholderType>(array: PlaceholderType[]): PlaceholderType | undefined {
    return array[array.length - 1]
}
console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))

/**
 * Mini-challenge: call `getLastItem` (and console.log the returned value)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

