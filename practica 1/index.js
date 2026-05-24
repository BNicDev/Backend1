// IMPORTAMOS LA CLASE 
const ProductManager = require("./productManager");

// Instanciamos y probamos tal cual veníamos haciendo
const manager = new ProductManager();

console.log("--- Agregando productos desde index.js ---");
manager.addProduct("Café de Especialidad", "Etiopía - Notas florales", 4500, "ruta/cafe.jpg", "CAF01", 10);
manager.addProduct("Prensa Francesa", "Vidrio borosilicato 600ml", 12000, "ruta/prensa.jpg", "PREN02", 5);

console.log("\n--- Productos actuales en memoria: ---");
console.log(manager.getProducts());