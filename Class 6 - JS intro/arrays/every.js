const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const evenNumbers = [2, 4, 6, 8, 0]

// let every = evenNumbers.every((n) => n % 2 === 0)
// console.log(every)

let employeeA = {
  name: "Pepe",
  age: 25,
  role: "Developer",
  sisben: true,
}
let employeeB = {
  name: "Pedro",
  age: 29,
  role: "Developer Jr",
  sisben: true,
}
let employeeC = {
  name: "Sara",
  age: 35,
  role: "UI Designer",
  sisben: false,
}
let employeeD = {
  name: "Laura",
  age: 17,
  role: "Dancer",
  sisben: true,
}

// let employees = [employeeA, employeeB, employeeC, employeeD]
let employees = [
  {
    name: "Pepe",
    age: 25,
    role: "Developer",
    sisben: true,
  },
  {
    name: "Pedro",
    age: 29,
    role: "Developer Jr",
    sisben: true,
  },
  {
    name: "Sara",
    age: 35,
    role: "UI Designer",
    sisben: false,
  },
  {
    name: "Laura",
    age: 17,
    role: "Dancer",
    sisben: true,
  },
]

let isSisben = employees.every((e) => e.sisben === true)
console.log(isSisben)

// let isAdult = employees.every((e) => e.age >= 18)
// console.log(isAdult)
