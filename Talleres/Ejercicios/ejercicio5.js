const ventas = [120000, 95000, 150000, 80000, 200000]

let mayor = ventas[0]

for (let i = 1; i < ventas.length; i++) {
  if (ventas[i] > mayor) {
    mayor = ventas[i]
  }
}

console.log(`La venta mayor fue de ${mayor}`)