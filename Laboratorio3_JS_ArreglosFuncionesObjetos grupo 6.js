/* ===========================================================
   Laboratorio: Arreglos, Funciones y Objetos
   Completa cada TODO. Prueba cada función con console.log
   antes de avanzar a la siguiente parte.
   =========================================================== */

/* ---------------- PARTE 1: ARREGLOS ---------------- */

const inventario = ["teclado", "mouse", "monitor", "audífonos"];
//Parta 1.1.a Escribe una expresión que obtenga el último elemento sin usar el índice numérico fijo
console.log(inventario[inventario.length - 1]);

function agregarItems(arr, alInicio, alFinal) {
  return [alInicio, ...arr, alFinal];
}
//Parte 1.1.b Agrega "webcam" al final y "cable HDMI" al inicio, sin usar .push/.unshift directamente en la consola: escribe una función agregarItems(arr, alInicio, alFinal) que devuelva un nuevo arreglo con ambos cambios, sin mutar el original.
console.log(agregarItems(inventario, "cable HDMI", "webcam"));

const temperaturas = [18, 22, 25, 30, 15, 19, 27];

//Parte 1.2.1 aFahrenheit(arr) → devuelve un nuevo arreglo con las temperaturas convertidas a Fahrenheit usando map.
function aFahrenheit(arr) {
  return arr.map(temp => temp * 9/5 + 32);
}
//Parte 1.2.2 diasCalurosos(arr, umbral) → devuelve solo los valores mayores al umbral usando filter.
function diasCalurosos(arr, umbral) {
  return arr.filter(temp => temp > umbral);
}
//Parte 1.2.3 promedio(arr) → devuelve el promedio usando reduce.
function promedio(arr) {
  const suma = arr.reduce((acumulador, temp) => acumulador + temp, 0);
  return suma / arr.length;
}
//Parte 1.2.4 temperaturaMaxima(arr) → devuelve el valor máximo (puedes usar reduce o Math.max(...arr)).
function temperaturaMaxima(arr) {
  return Math.max(...arr);
}
//Parte 1.2
console.log(aFahrenheit(temperaturas));
console.log(diasCalurosos(temperaturas, 20));
console.log(promedio(temperaturas));
console.log(temperaturaMaxima(temperaturas));

//Parte 1.3.a buscarPrimerMayorA(arr, valor) → usa find para devolver el primer elemento mayor que valor, o undefined si no existe.
function buscarPrimerMayorA(arr, valor) {
  return arr.find(elemento => elemento > valor);
}

//Parte 1.3.b ordenarDescendente(arr) → devuelve una **copia** ordenada de mayor a menor (cuidado: .sort() muta el arreglo original; usa el operador de propagación [...arr] para copiarlo primero).
function ordenarDescendente(arr) {
  return [...arr].sort((a, b) => b - a);
}

//Parte 1.3
console.log(buscarPrimerMayorA(temperaturas, 25));
console.log(ordenarDescendente(temperaturas));
console.log(temperaturas);

/* ---------------- PARTE 2: FUNCIONES ---------------- */

function procesarLista(arr, accion) {
  const resultado = [];
  for (const elemento of arr) {
    resultado.push(accion(elemento));
  }
  return resultado;
}
//Parte 2.1.1 -	Duplicar cada número de un arreglo. 
const numeros = [1, 2, 3, 4];
console.log(procesarLista(numeros, n => n * 2));

//Parte 2.1.2 -	Convertir cada palabra de un arreglo de strings a mayúsculas. 
const palabras = ["Ingeniería", "Web", "Arreglos"];
console.log(procesarLista(palabras, palabra => palabra.toUpperCase()));

//Reflexiona: ¿en qué se parece procesarLista a .map? 
//Basicamente son idénticas en estructura: ambas reciben un arreglo y una función, recorren cada elemento, le aplican la función, y devuelven un arreglo nuevo del mismo tamaño sin mutar el original. Osea que la función procesarLista es literalmente una reimplemntación de .map()
//¿Por qué el lenguaje ya trae ese método incorporado?
//Porque este patrón de transformar cada elemento de una colección es extremadamente común, asi que tenerlo como método nativo evita que cada programador tenga que reescribir el mismo bucle varias veces. 

//Parte 2.2 ¿qué es un closure y dónde aparece en este ejercicio?
//Un closure ocurre cuando una función recuerda las variables de su entorno, incluso después de que esa función externa ya terminó de ejecutarse.
//En este caso, crearMultiplicador(factor) se ejecuta y termina, pero la arrow function que devuelve sigue teniendo acceso a "factor" gracias al closure: "factor" queda "atrapado" dentro de esa función interna, como si viajara con ella.
function crearMultiplicador(factor) {
  return numero => numero * factor;
}
//Parte 2.2.1 Ejemplo de Uso
const porTres = crearMultiplicador(3);
console.log(porTres(10)); 
//pARTE 2.2.2 Por 10
const porDiez = crearMultiplicador(10);
console.log(porDiez(5)); 
console.log(porTres(5)); 


function dividirSeguro(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

//CASO EXITOSO
try {
  const resultado = dividirSeguro(10, 2);
  console.log("Resultado:", resultado); 
} catch (error) {
  console.log("Error:", error.message);
}

//CASO DE ERROR
try {
  const resultado = dividirSeguro(10, 0);
  console.log("Resultado:", resultado); 
} catch (error) {
  console.log("Error:", error.message); 
}

/* ---------------- PARTE 3: OBJETOS ---------------- */

//Parte 3.1 
const producto = {
  nombre: "Teclado mecánico",
  precio: 45,
  stock: 12,
  aplicarDescuento(porcentaje) {
    return this.precio - (this.precio * porcentaje / 100);
  },
};

console.log(producto.aplicarDescuento(20)); 
console.log(producto.precio);

const catalogo = [
  { nombre: "Teclado", precio: 45, categoria: "periféricos", stock: 12 },
  { nombre: "Monitor", precio: 180, categoria: "pantallas", stock: 5 },
  { nombre: "Mouse", precio: 20, categoria: "periféricos", stock: 30 },
  { nombre: "Silla", precio: 150, categoria: "mobiliario", stock: 0 },
];

//Parte 3.2 Arreglos de Objetos
//Parte 3.2.1 productosDisponibles(catalogo) → usando filter, devuelve solo los productos con stock > 0. 
function productosDisponibles(catalogo) {
  return catalogo.filter(producto => producto.stock > 0);
}

//PARTE 3.2.2 nombresPorCategoria(catalogo, categoria) → usando filter + map, devuelve un arreglo con solo los nombres de los productos de esa categoría. 
function nombresPorCategoria(catalogo, categoria) {
  return catalogo
    .filter(producto => producto.categoria === categoria)
    .map(producto => producto.nombre);
}

//pARTE 3.2.3 valorTotalInventario(catalogo) → usando reduce, devuelve la suma de precio * stock de todos los productos. 
function valorTotalInventario(catalogo) {
  return catalogo.reduce((total, producto) => total + producto.precio * producto.stock, 0);
}

//pARTE 3.2.4 productoMasCaro(catalogo) → devuelve el objeto completo del producto con mayor precio. 
function productoMasCaro(catalogo) {
  return catalogo.reduce((masCaro, producto) => producto.precio > masCaro.precio ? producto : masCaro);
}

//Parte 3.2
console.log(productosDisponibles(catalogo));
console.log(nombresPorCategoria(catalogo, "periféricos"));
console.log(valorTotalInventario(catalogo));
console.log(productoMasCaro(catalogo));

//Parte 3.3 
//Con desestructuración en los parámetros: en vez de recibir el objeto completo como "producto" y luego acceder con producto.categoria, extraemos directamente la propiedad que nos interesa desde la firma de la función flecha. Esto hace explícito, de un vistazo, qué parte
//del objeto le importa a cada callback, sin tener que leer el cuerpo completo para saberlo.

function nombresPorCategoria(catalogo, categoria) {
  return catalogo
    .filter(({ categoria: cat }) => cat === categoria)
    .map(({ nombre }) => nombre);
}

console.log(nombresPorCategoria(catalogo, "periféricos"));

/* ---------------- PARTE 4: RETO INTEGRADOR ---------------- */

const ventas = [
  { producto: "Teclado", cantidad: 3, precioUnitario: 45 },
  { producto: "Monitor", cantidad: 1, precioUnitario: 180 },
  { producto: "Mouse", cantidad: 5, precioUnitario: 20 },
  { producto: "Teclado", cantidad: 2, precioUnitario: 45 },
  { producto: "Silla", cantidad: 1, precioUnitario: 150 },
];

function generarReporte(ventas) {
  // 1. Total vendido: suma de cantidad * precioUnitario de todas las ventas
  const totalVendido = ventas.reduce(
    (total, venta) => total + venta.cantidad * venta.precioUnitario,
    0
  );

  // 2. Número de transacciones: simplemente cuántos registros hay
  const numeroTransacciones = ventas.length;

  // 3. Agrupar por producto usando reduce con un objeto "diccionario"
  const agrupado = ventas.reduce((acumulador, venta) => {
    const { producto, cantidad, precioUnitario } = venta;

    if (!acumulador[producto]) {
      // Primera vez que vemos este producto: lo inicializamos
      acumulador[producto] = { producto, cantidadTotal: 0, ingresoTotal: 0 };
    }

    acumulador[producto].cantidadTotal += cantidad;
    acumulador[producto].ingresoTotal += cantidad * precioUnitario;

    return acumulador;
  }, {});

  // 4. Convertir el objeto agrupado en un arreglo
  const resumenPorProducto = Object.values(agrupado);

  // 5. Encontrar el producto con más "cantidad" total, ordenando una copia
  const productoTopVentas = [...resumenPorProducto].sort(
    (a, b) => b.cantidadTotal - a.cantidadTotal
  )[0].producto;

  return {
    totalVendido,
    numeroTransacciones,
    productoTopVentas,
    resumenPorProducto,
  };
}
// Descomenta para probar cuando termines:
console.log(JSON.stringify(generarReporte(ventas), null, 2));