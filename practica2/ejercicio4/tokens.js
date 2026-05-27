const crypto = require('crypto');

//funcion para mezclar el user con un num aleatorio

function generarTokenSeguro(nombreUsuario){
    const aleatorio = Math.random().toString();
    const preToken = aleatorio + nombreUsuario;

    const hashGenerado = crypto
    .createHash('sha256')
    .update(preToken)
    .digest('hex')

    return hashGenerado;
}


// --- ZONA DE PRUEBAS (TESTS) ---
console.log("--- GENERANDO TOKENS DE ACTIVACIÓN SEGUROS ---");

// Generamos un token para nico.dev
const token1 = generarTokenSeguro("nico.dev");
console.log("Token 1 para 'nico.dev':", token1);

// Generamos OTRO token para el mismo usuario inmediatamente
const token2 = generarTokenSeguro("nico.dev");
console.log("Token 2 para 'nico.dev':", token2);

console.log("\n¿Los tokens son distintos?:", token1 !== token2 ? "SÍ, son únicos gracias al aleatorio! 🚀" : "No");