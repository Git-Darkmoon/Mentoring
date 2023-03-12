const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const employees = ["Anna", "Daniel", "Pepe", "Pedro", "Victor"]

let evenNumbers = numbers.filter((n) => {
  return n % 2 === 0
})

let newEmployees = employees.filter((e) => e.includes("a"))

let newID = newEmployees.map((x, indx) => `Hello ${x} your ID: ${indx}`)

console.log(newID)
