function saludar() {
  console.log("Hola a todos y todas")
}

// saludar()
// saludarConParametro('Jose')

// Parametros
function saludarConParametro(name) {
  console.log(`Hola como estas ${name}`)
}

// Aquí cuando invoco se llama argumento
// saludarConParametro('Angelica')

function calcularDescuento(precio) {
  const precioFinal = precio - (precio * 0.20)
  console.log(`Descuento Aplicado: ${descuento * 100}%`)
  console.log(`Descuento Total: ${(precio * descuento)}`)
  console.log(`Precio final: $ ${precioFinal}`)
}

// calcularDescuento(45000, 0.20)
// calcularDescuento(120000, 0.20)
// calcularDescuento(89900, 0.20)

// Segunda Parte
function calcularPrecio(precio) {
  return precio - (precio * 0.20)
}

function armarEtiqueta(nombre, precio) {
  const valor = calcularPrecio(precio)
  return `${nombre} cuesta $ ${valor}`
}

console.log(armarEtiqueta('Camiseta', 45000))

// Tercera Parte

console.log('camiseta'.toUpperCase())
console.log('camiseta'.length)
console.log(Math.round(36000.75))

