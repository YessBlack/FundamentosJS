# GEN C13 — Fundamentos de JavaScript

Repositorio personal de práctica del bootcamp **Generation Colombia (C13)**. Aquí replico y resuelvo ejercicios del curso sobre los conceptos base de **JavaScript**: tipos de datos, estructuras, flujos de control, ciclos, funciones, talleres y ejercicios con ejemplos ejecutables en Node.js.

---

## Requisitos

- [Node.js](https://nodejs.org/) instalado (v18 o superior recomendado)

## Cómo ejecutar los archivos

Desde la raíz del proyecto:

```bash
node 1Fundamentos/tiposDatos.js
node Talleres/Taller1/pedido.js
node Talleres/Ejercicios/ejercicio1.js
```

---

## Estructura del repositorio

```
GEN_C13_FundamentosJS/
├── 1Fundamentos/          # Tipos de datos, arrays, objetos y primeros scripts
├── 2FlujosControl/        # Condicionales y ciclos
├── 3Funciones/            # Declaración, parámetros y return
└── Talleres/
    ├── Taller1/           # Proyecto integrador (simulación de pedido Rappi)
    └── Ejercicios/        # Ejercicios de práctica (FizzBuzz, tablas, ventas…)
```

---

## Contenido del curso

### 1. Fundamentos de JavaScript

Los **fundamentos** son la base del lenguaje: variables, tipos de datos y estructuras para guardar información. JavaScript es un lenguaje **dinámicamente tipado**, es decir, el tipo de un valor se infiere en tiempo de ejecución.

| Tema | Definición breve | Archivos |
|------|------------------|----------|
| **Tipos de datos** | Clasificación de los valores que puede manejar JS: primitivos (`string`, `number`, `boolean`, `undefined`, `null`, `Symbol`, `bigint`) y estructuras (`array`, `object`). | `tiposDatos.js`, `app.js`, `cliente.js`, `rappi.js` |
| **Arrays** | Listas ordenadas de elementos accesibles por índice. Permiten agregar (`push`), quitar (`pop`) y consultar la cantidad de elementos (`length`). | `arrays.js` |
| **Objetos** | Colecciones de pares **clave–valor** que representan entidades (por ejemplo, un cliente con `nombre`, `edad`, `ciudad`). Se pueden leer, agregar, modificar y eliminar propiedades. | `objects.js` |

**Conceptos clave practicados:**
- `const` y `let` para declarar variables
- Template literals (`` `Hola, ${nombre}` ``)
- Operador `typeof` para conocer el tipo de un valor
- Coerción de tipos (por ejemplo, `"5" + 5` produce `"55"`)
- Diferencia entre reasignar una variable `const` y mutar el contenido de un objeto

---

### 2. Flujos de control

El **flujo de control** define qué líneas de código se ejecutan y en qué orden, según condiciones o repeticiones.

| Tema | Definición breve | Archivos |
|------|------------------|----------|
| **Condicionales** | Estructuras que ejecutan código solo si se cumple una condición: `if`, `else if` y `else`. Útiles para tomar decisiones (domicilio gratis, descuentos, validaciones). | `condiciones.js` |
| **Ciclos** | Estructuras que repiten un bloque de código: `while` (mientras se cumpla la condición) y `for` (con contador e índice). Sirven para recorrer listas, contar repartidores o procesar un carrito de compras. | `ciclos.js` |

**Conceptos clave practicados:**
- Comparaciones (`>`, `===`, `==`)
- Anidación de condiciones dentro de ciclos
- Recorrido de arrays con índice (`carrito[i]`)
- Recorrido de arrays de objetos (productos con `nombre` y `precio`)

---

### 3. Funciones

Una **función** es un bloque de código reutilizable que puede recibir **parámetros** (al definirla) y **argumentos** (al invocarla), y opcionalmente devolver un valor con `return`.

| Tema | Definición breve | Archivo |
|------|------------------|---------|
| **Funciones** | Permiten encapsular lógica (saludar, calcular descuentos, armar etiquetas de precio) y combinar varias funciones entre sí. | `funciones.js` |

**Conceptos clave practicados:**
- Declaración con `function nombre() { ... }`
- Parámetros y argumentos
- Valor de retorno (`return`)
- Métodos útiles de `String` y `Math` (`toUpperCase`, `length`, `Math.round`)

---

### 4. Talleres

Los **talleres** integran varios temas en un escenario práctico. El objetivo es aplicar fundamentos, flujos de control y estructuras de datos en un caso real.

| Taller | Descripción | Archivo |
|--------|-------------|---------|
| **Taller 1 — Pedido Rappi** | Simulación de un pedido de delivery: datos del cliente, carrito de productos (`push` / `pop`), ficha del pedido como objeto, actualización de estado y resumen de cobro (subtotal, domicilio, propina y total). Incluye una nota sobre coerción de tipos al sumar strings con números. | `Talleres/Taller1/pedido.js` |

---

### 5. Ejercicios de práctica

Los **ejercicios** refuerzan ciclos, condicionales y trabajo con arrays mediante problemas clásicos y casos de negocio.

| Ejercicio | Objetivo | Archivo |
|-----------|----------|---------|
| **Ejercicio 1 — FizzBuzz** | Imprimir del 1 al 20: múltiplos de 3 → `Fizz`, de 5 → `Buzz`, de ambos → `FizzBuzz`. | `ejercicio1.js` |
| **Ejercicio 2 — Tabla del 7** | Generar la tabla de multiplicar del 7 del 1 al 10 con `for`. | `ejercicio2.js` |
| **Ejercicio 3 — Reparto de pedidos** | Asignar pedidos pares a Persona A e impares a Persona B usando `continue`. | `ejercicio3.js` |
| **Ejercicio 4 — Promedio de ventas** | Calcular el promedio de un arreglo de ventas con un ciclo `for`. | `ejercicio4.js` |
| **Ejercicio 5 — Venta mayor** | Encontrar el valor más alto en un arreglo de ventas. | `ejercicio5.js` |

---

## Glosario rápido

| Término | Significado |
|---------|-------------|
| **Variable** | Contenedor con nombre que guarda un valor (`let`, `const`). |
| **Tipo primitivo** | Valor simple e inmutable: texto, número, booleano, etc. |
| **Array** | Lista ordenada de valores. |
| **Objeto** | Conjunto de propiedades con nombre y valor. |
| **Condicional** | Decisión en el código según verdadero o falso. |
| **Ciclo** | Repetición de un bloque hasta cumplir una condición. |
| **Función** | Bloque reutilizable que puede recibir datos y devolver un resultado. |
| **Coerción de tipos** | Conversión automática de un tipo a otro (por ejemplo, número a string al usar `+`). |

---

## Estudiante

**Angélica García** — Estudiante del bootcamp Generation Colombia, Cohort C13

Este repositorio recopila mis avances, notas y soluciones a los talleres y ejercicios del curso. No forma parte del equipo educativo de Generation; el contenido del programa pertenece al bootcamp.

---

## Nota

El material y la estructura del curso son propiedad de **Generation Colombia**. Este repo es únicamente para fines de aprendizaje y práctica personal.
