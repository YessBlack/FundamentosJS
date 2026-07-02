const prompt = require('prompt-sync')();

let response = 1

while (response !== 0) {
  console.log()
  console.log(" ---------------- Calculadora ----------------");
  console.log()
  console.log("Selecciona una operación")
  console.log("1. Suma")
  console.log("2. Resta")
  console.log("3. Multiplicación")
  console.log("4. Division")
  console.log("0. Salir")

  console.log()
  response = Number(prompt("Opción: > "));
  console.log()

  if (response === 0) break

  if (![1, 2, 3, 4].includes(response)) {
    console.log("Opción no válida, intenta de nuevo")
    continue
  }

  let numero1 = Number(prompt("Escribe numero 1: "))
  let numero2 = Number(prompt("Escribe numero 2: "))

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log()
    console.log("Debes ingresar números validos")
    continue
  }

  let resultado = 0

  console.log()

  if (response === 1) {
    console.log(`El resultado es: ${numero1 + numero2}`)
    continue
  }

  if (response === 2) {
    console.log(`El resultado es: ${numero1 - numero2}`)
    continue
  }

  if (response === 3) {
    console.log(`El resultado es: ${numero1 * numero2}`)
    continue
  }

  if (response === 4) {
    const div = numero1 / numero2

    if (Number.isNaN(div) || Number.isFinite(div)) {
      console.log("No puedes dividir estos números")
      continue
    }

    console.log(`El resultado es: ${div}`)
  }
}
