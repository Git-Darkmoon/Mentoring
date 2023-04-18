/*
DOM - Document Object Model
BOM - Browser Object Model
*/

/*
dom selectors performance hierarchy:

querySelector ==> CSS Selectors  
ClassName
ById

*/

const btn = document.querySelector("#txtBtn")
const input = document.getElementById("input")
const miVariable = document.getElementById("text")

/* Event Listeners:

Syntaxis:
    elementoDelDOM.addEventListener("tipoDeEvento",() => {
        que quiero que pase en ese evento.
    })

    -----Tipos de Eventos------
    
    - Click
    - MouseOver
    - MouseOut
    - KeyUp
    - KeyDown
    - KeyPressed

*/

btn.addEventListener("click", (aTiMismo) => {
  aTiMismo.preventDefault()
  let inputTxt = input.value
  miVariable.textContent = inputTxt
  input.value = ""
})
