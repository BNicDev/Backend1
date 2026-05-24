// Importamos tu clase UserManager
const UserManager = require("./userManager");

// Instanciamos el manager de usuarios
const manager = new UserManager();

console.log("--- 1. Listado Inicial (Debería estar vacío) ---");
console.log(manager.getUser()); 

console.log("\n--- 2. Registrando usuarios válidos ---");
// Caso con rol explícito
manager.registerUser("nico.dev", "nico@correo.com", "clave123", "admin");
// Caso sin rol (debería tomar 'user' por defecto)
manager.registerUser("brian.p", "brian@correo.com", "password456");
// Otro usuario común
manager.registerUser("sofia.code", "sofia@correo.com", "sofia789", "user");

console.log("\n--- 3. Verificando usuarios guardados ---");
console.log(manager.getUser());

console.log("\n--- 4. Probando validaciones de duplicados y campos ---");
// Intento con username repetido (Debería fallar)
manager.registerUser("nico.dev", "otro_correo@correo.com", "nuevaClave");

// Intento con email repetido (Debería fallar)
manager.registerUser("carlos.js", "brian@correo.com", "carlosClave");

// Intento sin password (Debería fallar por campo obligatorio)
manager.registerUser("marcos.dev", "marcos@correo.com", "");

console.log("\n--- 5. Probando búsquedas por ID ---");
// ID existente (Debería mostrar a nico.dev)
console.log("Usuario ID 1 encontrado:", manager.getUsersById(1));

// ID inexistente (Debería tirar "Not Found")
manager.getUsersById(99);

console.log("\n--- 6. Probando filtrado por Rol ---");
// Buscando administradores (Debería traer un array con 1 usuario)
console.log("Administradores:", manager.getUsersByRole("admin"));

// Buscando usuarios comunes (Debería traer un array con 2 usuarios)
console.log("Usuarios estándar:", manager.getUsersByRole("user"));

// Buscando un rol que no existe (Debería tirar "Users not Found")
manager.getUsersByRole("premium");