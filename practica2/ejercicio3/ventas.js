const fs = require('fs/promises');
const path = require('path');

//creamos la carpeta y el archivos de los logs
const carpetaFacturacion = path.join(__dirname, 'facturacion');
const rutaReportes = path.join(carpetaFacturacion, 'reporte.txt');

//creamos la funcion asincrona para el registro de las ventas

async function registrarVenta(producto, precio, cantidad){
    try{
        await fs.mkdir(carpetaFacturacion, {recursive:true});
    
    let reporte = "";
    
    if(!producto || !precio){
        console.error("Error: los campos son obligatorios para registrar la venta");
        return;
    }
     if(cantidad <= 0){
        console.error(`Error: no se puede registrar la venta de ${cantidad} productos`);
        return;
    }

    const totalVenta = precio*cantidad;
    reporte = `Producto: ${producto} - Cantidad: ${cantidad} - Total: ${totalVenta} \n `

    await fs.appendFile(rutaReportes,reporte, 'utf-8');
    console.log("reporte registrado con exito")
    }catch(error){
        console.error("no se pudo realizar correctamente el reporte:", error)
    }
}


// --- ZONA DE PRUEBAS ---
async function correrPruebas() {
    console.log("--- Probando registro de ventas ---");
    await registrarVenta("Remera", 15000, 2);      // Válida ($30000)
    await registrarVenta("Café Molido", 8500, 1);  // Válida ($8500)
    await registrarVenta("Termo", 45000, 0);       // Debería rebotar por cantidad 0
    await registrarVenta("", 2000, 3);             // Debería rebotar por falta de producto
}

correrPruebas();