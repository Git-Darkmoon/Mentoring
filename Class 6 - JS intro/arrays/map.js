/*
 array.map(() => {
    return algo
 })

 itera un array y RETORNA otro array.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const employees = ["A", "B", "C", "D", "E"]
const employeesSalary = [1000, 2500, 3245, 12321, 10]

const cNumbers = numbers.map((eachVictor) => eachVictor * 2)

const employeesGreet = employees.map(
  (eachE, indexEmp) => `Hello ${eachE} ID: ${indexEmp + 1}`
)

const newSalaries = employeesSalary.map((salary) => {
  let risePercentage = 0.5
  let rise = salary * risePercentage
  let newSalary = salary + rise
  return newSalary
})

console.log(employeesGreet)
// console.log(newSalaries)
