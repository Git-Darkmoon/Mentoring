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

let isDev = employees.some((n) => {
  return n.name === "Angie"
})

console.log(isDev)
