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

let newEmployees = [
  ...employees,
  {
    name: "Valentina",
    age: 94,
    role: "Student",
    sisben: true,
  },
  {
    name: "Valentino",
    age: 4,
    role: "Born",
    sisben: true,
  },
]

// console.log(employees)
// console.log(newEmployees)

const salarySum = (name, role, ...nums) => {
  let totalSalary = nums.reduce((total, n) => (total += n), 0)
  return `${name} working as ${role} with the introduced salaries, you've earned: ${totalSalary}`
}

console.log(salarySum("Victor", "AI Developer", 12000, 15000, 174000))
console.log(salarySum("Nicolas", "Frontend Dev", 84000))
