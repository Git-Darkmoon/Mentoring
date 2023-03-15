// Inputs
const n1 = document.getElementById("number1")
const n2 = document.getElementById("number2")

// Operations Buttons:
const sumBtn = document.getElementById("sum")
const minusBtn = document.getElementById("minus")
const timesBtn = document.getElementById("times")
const dividesBtn = document.getElementById("divides")

// Result text:
const resultTxt = document.getElementById("result")

sumBtn.addEventListener("click", () => {
  resultTxt.textContent = n1.valueAsNumber + n2.valueAsNumber
})
minusBtn.addEventListener("click", () => {
  resultTxt.textContent = n1.valueAsNumber - n2.valueAsNumber
})
timesBtn.addEventListener("click", () => {
  resultTxt.textContent = n1.valueAsNumber * n2.valueAsNumber
})
dividesBtn.addEventListener("click", () => {
  resultTxt.textContent = (n1.valueAsNumber / n2.valueAsNumber).toPrecision(2)
})

// Incrementador.
// Git
// Generador de color aleatorio.
// Quote Generator.
// Testimonials.

// JS Asynchronous
