/* ===========================================================
   Laboratorio: Arreglos, Funciones y Objetos
   Completa cada TODO. Prueba cada función con console.log
   antes de avanzar a la siguiente parte.
   =========================================================== */

/* ===========================================================
   Grupo conformado por Gustavo Reyes y Van Wu
   =========================================================== */


/* ---------------- PARTE 1: ARREGLOS ---------------- */

const inventario = ["teclado", "mouse", "monitor", "audífonos"];


// 1.1 Agregar elementos sin modificar el arreglo original
function agregarItems(arr, alInicio, alFinal) {
  return [alInicio, ...arr, alFinal];
}


// Prueba 1.1
console.log("=== PARTE 1.1 ===");
console.log("Último elemento:", inventario[inventario.length - 1]);
console.log(
  "Nuevo inventario:",
  agregarItems(inventario, "cable HDMI", "webcam")
);
console.log("Inventario original:", inventario);


const temperaturas = [18, 22, 25, 30, 15, 19, 27];


// 1.2 Convertir Celsius a Fahrenheit
function aFahrenheit(arr) {
  return arr.map(temp => temp * 9 / 5 + 32);
}


// Obtener temperaturas mayores al umbral
function diasCalurosos(arr, umbral) {
  return arr.filter(temp => temp > umbral);
}


// Calcular promedio
function promedio(arr) {
  return arr.reduce((suma, temp) => suma + temp, 0) / arr.length;
}


// Obtener temperatura máxima
function temperaturaMaxima(arr) {
  return Math.max(...arr);
}


// Pruebas Parte 1.2
console.log("\n=== PARTE 1.2 ===");

console.log("Temperaturas:", temperaturas);

console.log(
  "Temperaturas en Fahrenheit:",
  aFahrenheit(temperaturas)
);

console.log(
  "Días calurosos mayores a 24:",
  diasCalurosos(temperaturas, 24)
);

console.log(
  "Promedio:",
  promedio(temperaturas)
);

console.log(
  "Temperatura máxima:",
  temperaturaMaxima(temperaturas)
);


// 1.3 Buscar primer número mayor
function buscarPrimerMayorA(arr, valor) {
  return arr.find(numero => numero > valor);
}


// Ordenar de mayor a menor sin modificar el arreglo original
function ordenarDescendente(arr) {
  return [...arr].sort((a, b) => b - a);
}


// Pruebas Parte 1.3
console.log("\n=== PARTE 1.3 ===");

console.log(
  "Primer número mayor que 23:",
  buscarPrimerMayorA(temperaturas, 23)
);

console.log(
  "Temperaturas ordenadas de mayor a menor:",
  ordenarDescendente(temperaturas)
);

console.log(
  "Temperaturas originales:",
  temperaturas
);


/* ---------------- PARTE 2: FUNCIONES ---------------- */


// 2.1 Funciones como parámetros
function procesarLista(arr, accion) {

  const resultado = [];

  arr.forEach(elemento => {
    resultado.push(accion(elemento));
  });

  return resultado;
}


// Pruebas de procesarLista
console.log("\n=== PARTE 2.1 ===");

const numeros = [1, 2, 3, 4, 5];

console.log(
  "Números duplicados:",
  procesarLista(numeros, numero => numero * 2)
);


const palabras = ["hola", "mundo", "javascript"];

console.log(
  "Palabras en mayúsculas:",
  procesarLista(palabras, palabra => palabra.toUpperCase())
);


// 2.2 Funciones flecha y closure
function crearMultiplicador(factor) {
  return numero => numero * factor;
}


// Prueba crearMultiplicador
console.log("\n=== PARTE 2.2 ===");

const porTres = crearMultiplicador(3);

console.log(
  "10 multiplicado por 3:",
  porTres(10)
);


// Closure:
// La función interna recuerda el valor de "factor"
// aunque crearMultiplicador ya haya terminado.


/* 2.3 Validación y manejo de errores */

function dividirSeguro(a, b) {

  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }

  return a / b;
}


// Pruebas dividirSeguro
console.log("\n=== PARTE 2.3 ===");


// Caso exitoso
try {

  console.log(
    "10 / 2 =",
    dividirSeguro(10, 2)
  );

} catch (error) {

  console.log("Error:", error.message);
}


// Caso de error
try {

  console.log(
    "10 / 0 =",
    dividirSeguro(10, 0)
  );

} catch (error) {

  console.log(
    "Error capturado:",
    error.message
  );
}


/* ---------------- PARTE 3: OBJETOS ---------------- */


// 3.1 Objeto producto
const producto = {

  nombre: "Teclado mecánico",

  precio: 45,

  stock: 12,

  aplicarDescuento(porcentaje) {

    return this.precio -
      (this.precio * porcentaje / 100);

  },
};


// Prueba producto
console.log("\n=== PARTE 3.1 ===");

console.log(
  "Producto:",
  producto
);

console.log(
  "Precio original:",
  producto.precio
);

console.log(
  "Precio con 20% de descuento:",
  producto.aplicarDescuento(20)
);

console.log(
  "Precio original después del descuento:",
  producto.precio
);


const catalogo = [

  {
    nombre: "Teclado",
    precio: 45,
    categoria: "periféricos",
    stock: 12
  },

  {
    nombre: "Monitor",
    precio: 180,
    categoria: "pantallas",
    stock: 5
  },

  {
    nombre: "Mouse",
    precio: 20,
    categoria: "periféricos",
    stock: 30
  },

  {
    nombre: "Silla",
    precio: 150,
    categoria: "mobiliario",
    stock: 0
  },

];


// 3.2 Productos disponibles
function productosDisponibles(catalogo) {

  return catalogo.filter(
    producto => producto.stock > 0
  );

}


// Nombres por categoría usando desestructuración
function nombresPorCategoria(catalogo, categoria) {

  return catalogo

    .filter(({ categoria: cat }) => cat === categoria)

    .map(({ nombre }) => nombre);

}


// Valor total del inventario
function valorTotalInventario(catalogo) {

  return catalogo.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

}


// Producto más caro
function productoMasCaro(catalogo) {

  return catalogo.reduce(
    (productoCaro, productoActual) =>
      productoActual.precio > productoCaro.precio
        ? productoActual
        : productoCaro
  );

}


// Pruebas Parte 3.2 y 3.3
console.log("\n=== PARTE 3.2 ===");

console.log(
  "Productos disponibles:",
  productosDisponibles(catalogo)
);

console.log(
  "Nombres de periféricos:",
  nombresPorCategoria(catalogo, "periféricos")
);

console.log(
  "Valor total del inventario:",
  valorTotalInventario(catalogo)
);

console.log(
  "Producto más caro:",
  productoMasCaro(catalogo)
);


/* ---------------- PARTE 4: RETO INTEGRADOR ---------------- */


const ventas = [

  {
    producto: "Teclado",
    cantidad: 3,
    precioUnitario: 45
  },

  {
    producto: "Monitor",
    cantidad: 1,
    precioUnitario: 180
  },

  {
    producto: "Mouse",
    cantidad: 5,
    precioUnitario: 20
  },

  {
    producto: "Teclado",
    cantidad: 2,
    precioUnitario: 45
  },

  {
    producto: "Silla",
    cantidad: 1,
    precioUnitario: 150
  },

];


function generarReporte(ventas) {

  // Agrupar las ventas por producto
  const agrupado = ventas.reduce(
    (acumulador, venta) => {

      const nombre = venta.producto;

      // Crear el producto si todavía no existe
      if (!acumulador[nombre]) {

        acumulador[nombre] = {

          producto: nombre,

          cantidadTotal: 0,

          ingresoTotal: 0

        };

      }

      // Acumular cantidad
      acumulador[nombre].cantidadTotal +=
        venta.cantidad;

      // Acumular ingreso
      acumulador[nombre].ingresoTotal +=
        venta.cantidad * venta.precioUnitario;

      return acumulador;

    },
    {}
  );


  // Convertir el objeto agrupado en arreglo
  const resumen = Object.values(agrupado);


  // Copiar y ordenar por cantidad vendida
  const ordenado = [...resumen].sort(
    (a, b) => b.cantidadTotal - a.cantidadTotal
  );


  // Crear reporte
  return {

    totalVendido: ventas.reduce(
      (total, venta) =>
        total +
        venta.cantidad *
        venta.precioUnitario,
      0
    ),

    numeroTransacciones: ventas.length,

    productoTopVentas: ordenado[0].producto,

    resumenPorProducto: resumen

  };

}


// Probar reporte
console.log("\n=== PARTE 4 ===");

console.log(
  JSON.stringify(
    generarReporte(ventas),
    null,
    2
  )
);

// PREGUNTAS DE CIERRE

// 1. ¿Qué diferencia hay entre map y forEach? ¿Cuándo usarías cada uno?

// map y forEach sirven para recorrer los elementos de un arreglo,
// pero tienen una diferencia notable. Map devuelve un nuevo
// arreglo con los resultados de aplicar una función a cada elemento,
// mientras que forEach solamente ejecuta una acción para cada
// elemento y no devuelve un nuevo arreglo.
//
// Usaría map cuando se quiere transformar los elementos de un arreglo,
// por ejemplo, convertir temperaturas de Celsius a Fahrenheit.
// Usaría forEach cuando solamente se necesita recorrer los elementos
// para realizar alguna acción sobre ellos.


// 2. ¿Por qué reduce se considera el método "más general"
// entre los métodos de arreglos vistos?

// reduce se considera más general porque permite recorrer todos
// los elementos de un arreglo y acumularlos para obtener un único
// resultado. Ese resultado puede ser un número, un objeto, un arreglo
// u otro tipo de dato.
//
// Por ejemplo, en este laboratorio se utiliza reduce para calcular
// el promedio, el valor total del inventario y para agrupar las
// ventas por producto.


// 3. Da un ejemplo real (fuera de este laboratorio) donde
// modelarías datos como un arreglo de objetos.

// Un ejemplo real sería un sistema universitario donde se almacenan
// los estudiantes. Cada estudiante podría representarse como un
// objeto con propiedades como nombre, carrera, semestre y promedio.
//
// Por ejemplo:
//
// const estudiantes = [
//   {
//     nombre: "Ana",
//     carrera: "Ingeniería de Software",
//     semestre: 3,
//     promedio: 4.5
//   },
//   {
//     nombre: "Carlos",
//     carrera: "Ingeniería de Sistemas",
//     semestre: 2,
//     promedio: 4.2
//   }
// ];
//
// De esta manera sería más fácil buscar, ordenar o filtrar
// información de los estudiantes.


// 4. ¿Qué ventaja tiene evitar mutar arreglos y objetos directamente?

// Evitar modificar directamente los arreglos y objetos permite
// conservar los datos originales. Esto ayuda a evitar errores
// inesperados cuando el arreglo u objeto original todavía se
// necesita en otra parte del programa.
//
// Además, trabajar con copias hace que el código sea más fácil
// de entender, probar y mantener.
// ===========================================================
// FIN DEL LABORATORIO
// ===========================================================