let repartidoresLibres = 1;

while (repartidoresLibres <= 3) {
  console.log("Repartidor #" + repartidoresLibres + " disponible");
  repartidoresLibres = repartidoresLibres + 1;
}

// for

for (let i = 1; i <= 3; i++) {
  console.log(`Empacando Producto #${i}`)
}


let carrito = ["Arroz", "Pollo", "Gaseosa"];

for (let i = 0; i < carrito.length; i++) {
  console.log("Producto: " + carrito[i]);
}

let carrito = [
  { nombre: "Arroz", precio: 8000 },
  { nombre: "Pollo", precio: 25000 },
  { nombre: "Gaseosa", precio: 6000 }
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].precio > 20000) {
    console.log(carrito[i].nombre + " es un producto caro 💰");
  } else {
    console.log(carrito[i].nombre + " tiene buen precio ✅");
  }
}

console.log("5" == 5)
console.log(5 === "5")