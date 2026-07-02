// Parte 1 — Los datos del cliente
let customer = "Angelica"
let city = "Bogota"
let isRappiPrime = true

console.log()
console.log(`  🛵  ¡Hola, ${customer}! Bienvenida a Rappi`)
console.log(`  📍  Ciudad de entrega: ${city}`)
console.log(`  ⭐  RappiPrime activo: ${isRappiPrime ? "Sí" : "No"}`)

// Parte 2 — Los productos del pedido
const products = ["Hamburguesa", "Papas", "Gaseosa 2.5 L", "Picada", "Pizza"]

console.log()
console.log(`  🛒  RESUMEN DE TU CARRITO`)
console.log(`  -------------------------------------------`)
products.forEach((product, index) => {
  console.log(`     ${index + 1}. ${product}`)
})

console.log()
console.log(`  👉🏼  ACCIONES DE MENU`)
console.log(`  -------------------------------------------`)

console.log()
console.log(`  👉  Primer ítem seleccionado: ${products[0]}`)

// Despues de la llamada, pide un postre
products.push("Postre")
console.log()
console.log(`  ✅  Ítem agregado: Postre`)
console.log(`  📋  Carrito actualizado: ${products.join(" · ")}`)

// El Cliente se arrepiente y no quiere Postre
products.pop(products.length - 1)
console.log()
console.log(`  ❌  Ítem eliminado: Postre`)
console.log(`  📋  Carrito actualizado: ${products.join(" · ")}`)

console.log()
console.log(`  ✔️  Productos confirmados:`)
console.log(`  -------------------------------------------`)
products.forEach((product, index) => {
  console.log(`     ${index + 1}. ${product}`)
})
console.log()
console.log(`     - Total de Productos: ${products.length}`)

// Parte 3 — El pedido completo como una ficha

const order = {
  customer,
  city,
  products,
  isRappiPrime,
  status: "Preparación"
}

console.log()
console.log(`  📄  FICHA DEL PEDIDO`)
console.log(`  -------------------------------------------`)
console.log(`  👤  Cliente  : ${order.customer}`)
console.log(`  📍  Ciudad   : ${order.city}`)
console.log(`  ⭐  Prime    : ${order.isRappiPrime ? "Activo" : "Inactivo"}`)
console.log(`  📦  Estado   : ${order.status}`)
console.log(`  🛒  Productos: ${order.products.join(", ")}`)

order.status = "En camino"

console.log()
console.log(`  🚀  ACTUALIZACIÓN DE ESTADO`)
console.log(`  -------------------------------------------`)
console.log(`  👤  Cliente : ${order.customer}`)
console.log(`  📦  Estado  : ${order.status}`)

// Reto de anidación
//console.log(`  🥇  Primer producto en tu pedido: ${order.products[0]}`)

// Parte 4 — El cobro
let subtotalProducts = 70000
let delivery = 10000
const suggestedTipPercentage = 0.1
let total = subtotalProducts + delivery;

console.log()
console.log(`  💳  RESUMEN DE COBRO — ${customer}`)
console.log(`  -------------------------------------------`)
console.log(`  🛒  Subtotal productos    : ${subtotalProducts}`)
console.log(`  🛵  Costo de domicilio    : ${delivery}`)
console.log(`  💡  Propina sugerida (10%): ${subtotalProducts * suggestedTipPercentage}`)
console.log(`  -------------------------------------------`)
console.log(`  💰  TOTAL A PAGAR         : ${total}`)
console.log()

/** 
 * Trampa intencional — léela con cuidado: subtotal "20000" domicilio: 3500 
 * Si subtotalProducts llega como string y delivery en numero  
 * Intento realizar subtotalProducts + delivery sucede que:
 * JS infiere que tenemos 2 strings y por tanto el resultado seria 200003500
 * Porque une ambos como si fuera un texto
**/