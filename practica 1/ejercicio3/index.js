// Importamos tu clase PlayListManager
const PlayListManager = require("./playListManager");

// Instanciamos el manager
const playlist = new PlayListManager();

console.log("--- 1. Agregando canciones a la lista ---");
playlist.addSong("De Música Ligera", "Soda Stereo", "3:32", "Rock");
playlist.addSong("Tratame Suavemente", "Soda Stereo", "3:50", "Rock"); // Mismo artista, distinto título -> OK
playlist.addSong("Arrancarmelo", "Wos", "3:02", "Alternativo");
playlist.addSong("Spaghetti del Rock", "Divididos", "3:31", "Rock");

console.log("\n--- 2. Intentando agregar una repetida ---");
// Mismo título y mismo artista -> Debería rebotar
playlist.addSong("De Música Ligera", "Soda Stereo", "3:32", "Rock");

console.log("\n--- 3. Simulando reproducciones (playSong) ---");
// Vamos a escuchar "De Música Ligera" (ID 1) unas 3 veces
playlist.playSong(1);
playlist.playSong(1);
playlist.playSong(1);

// Vamos a escuchar "Arrancarmelo" (ID 3) unas 2 veces
playlist.playSong(3);
playlist.playSong(3);

// Intentamos reproducir una canción que no existe (ID 99) -> Debería tirar error
playlist.playSong(99);

console.log("\n--- 4. Buscando canciones favoritas (getFavorites) ---");

console.log("\n> Canciones con un mínimo de 3 reproducciones (Debe traer solo ID 1):");
console.log(playlist.getFavorites(3));

console.log("\n> Canciones con un mínimo de 2 reproducciones (Debe traer ID 1 e ID 3):");
console.log(playlist.getFavorites(2));

console.log("\n> Probando filtro con un mínimo muy alto (Debería tirar error):");
playlist.getFavorites(10);