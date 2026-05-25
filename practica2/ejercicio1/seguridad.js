//importamos los modulos que necesitamos
const fs = require('fs/promises');
const path = require('path');

//creamos una ruta segura hacia el archivo access.log dentro de log

const carpetaLogs = path.join(__dirname, 'logs');
const rutaLog = path.join(carpetaLogs, 'access.log');

//creamos la funcion asincrona para registrar la actividad
async function registrarLog(username, exito){
    try{
        //capturamos la fecha y hora en un string
        await fs.mkdir(carpetaLogs, { recursive: true });
        const fechaActual = new Date().toLocaleString();

        //creamos la variable donde vamos a armar el mensaje
        let mensaje = "";

        if(exito === true){
            //si el login fue exitoso armamos el msj 
            mensaje = `[${fechaActual}] - El usuario  ${username} ingreso con exito.`;
        }
        else{
            //si fallo armamos el msj de intento fallido
            mensaje = `[${fechaActual}] - INTENTO FALLIDO de inicio de sesion del usuario ${username}`
        }
        await fs.appendFile(rutaLog, mensaje, 'utf-8');

        console.log(`actividad de ${username} registrada en el log.`)
    }catch(error){
        //si hay algun error o pasa algo raro
        console.error("no se pudo escribir en el archivo de log:", error)
    }
}

// --- ZONA DE PRUEBAS (TESTS) ---
async function correrPruebas() {
    await registrarLog("nico.dev", true);      // Intento exitoso
    await registrarLog("carlos.js", false);    // Intento fallido
    await registrarLog("nico.dev", false);      // Otro intento fallido
}

correrPruebas();