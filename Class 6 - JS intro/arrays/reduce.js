const employeesSalary = [1000, 2500, 3245, 12321, 10]

/*
    array.reduce((accVariable, iteratorVariable) => {

    },initialValueAcc)
*/

let total = 0
for (i of employeesSalary) {
  total += i
}
console.log(total)

let totalSalary = employeesSalary.reduce(
  (total, salary) => (total += salary),
  0
)

console.log(totalSalary)
