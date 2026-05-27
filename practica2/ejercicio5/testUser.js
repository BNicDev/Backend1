const UsersManager = require('./userManager');

// Instanciamos el manager pasándole la ruta del archivo que queremos que cree
const manager = new UsersManager('./usuarios.json');

async function ejecutarPruebas() {
    console.log("--- 1. Agregando usuarios ---");
    await manager.addUser({ name: "Brian Nicolas", role: "Frontend Dev" });
    await manager.addUser({ name: "Carlos", role: "Backend Dev" });
    await manager.addUser({ name: "Ana", role: "UI Designer" });

    console.log("\n--- 2. Leyendo usuarios actuales del archivo ---");
    const usuariosActuales = await manager.getUsers();
    console.log(usuariosActuales);

    console.log("\n--- 3. Eliminando al usuario con ID 2 (Carlos) ---");
    await manager.deleteUser(2);

    console.log("\n--- 4. Verificando la lista final en el archivo ---");
    const listaFinal = await manager.getUsers();
    console.log(listaFinal);
}

ejecutarPruebas();