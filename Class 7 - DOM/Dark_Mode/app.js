const btnMode = document.getElementById("btnMode")
const container = document.querySelector(".container")

let classToAdd = "dark_mode"

btnMode.addEventListener("click", () => {
  container.classList.toggle(classToAdd)
})

// console.log(5 > 2 ? "Es mayor" : "Es menor")
