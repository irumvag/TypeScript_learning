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

function addNewPizza(pizzaObj: Pizza) {
    pizzaObj.id=nextPizzaId++;
    menu.push(pizzaObj)
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

// addNewPizza({  name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({  name: "BBQ Chicken", price: 12 })
// addNewPizza({  name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Anchovy")
// placeOrder("Veggie")
// completeOrder(2)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)


type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
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

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)