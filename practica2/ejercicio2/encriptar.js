const crypto = require('crypto');

//funcion para encriptar
function encriptarPassword(passwordOriginal){
    const hashGenerado = crypto
    //usamos el std industrial sha-256
    .createHash('sha256')
    //le pasamos la password
    .update(passwordOriginal)
    //le pedimos que nos devuelvo la password en hex
    .digest('hex')

    //retornamos la password ya encriptada
    return hashGenerado;
}


// --- ZONA DE PRUEBAS (TESTS) ---

const claveUsuario = "MiSuperClave123";

// Encriptamos la clave
const claveEncriptada = encriptarPassword(claveUsuario);

console.log("--- PROBANDO CRIPTO ---");
console.log("Contraseña original escrita por el usuario:", claveUsuario);
console.log("Contraseña como se guardaría en la Base de Datos:", claveEncriptada);

console.log("\n------------------------------------------------------------");


const pruebaDos = encriptarPassword("MiSuperClave123");
console.log("Si el usuario vuelve a loguearse con la misma clave, el hash da igual?:", claveEncriptada === pruebaDos ? "SÍ, coincide!" : "No");