const cliente = {
  nombre: "Andrés",
  edad: 30
};

console.log(cliente);
console.log(cliente.nombre);
console.log(cliente.edad);

cliente.ciudad = "Cali";     // agrega una nueva clave
console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }
cliente.edad = 31;           // cambia un valor existente
console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }
delete cliente.edad;         // elimina una clave
console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }

// No puedo reasignarlo porque es const
// Pero si puede cambiar su estructura interna
// cliente = {}
