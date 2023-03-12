// variable = condition ? trueReturn : falseReturn;

const age = 8

let human = {
  name: "Pepe",
  isAdult: true,
  handsome: "no",
}

const isAdult = age >= 18 ? (human.isAdult = true) : (human.isAdult = false)

// let testAdult = ""

// if (age >= 18) {
//   testAdult = "ES ADULT@"
// } else {
//   testAdult = "ES UN NIÑ@"
// }

console.log(human)
