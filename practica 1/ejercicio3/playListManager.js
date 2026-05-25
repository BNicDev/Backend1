class PlayListManager{
    constructor(){
        this.songs = [];
        this.currentId = 1;
    }

    addSong(title,artist,duration,genre){
        if(!title || !artist || !duration || !genre ){
            console.error("Error: todos los campos son obligatorios");
            return;
        }

        const songExist = this.songs.some(songs => songs.title === title && songs.artist === artist);
         if(songExist){
            console.error(`Error: la cancion ${title} ya existe en la lista`);
            return;
         }

         const newList = {
            id: this.currentId,
            title,
            artist,
            duration,
            genre,
            plays : 0
         }

         this.songs.push(newList);
         this.currentId++;
         console.log(`la cancion ${title} del artista ${artist} fue agregada con exito a la lista`);
    }

    getPlayList(){
        return this.songs;
    }

    playSong(id){
        const foundSong = this.songs.find(song => song.id === id)

        if(!foundSong){
            console.error("Song not Found");
            return;
        }
            foundSong.plays++
            console.log(`Reproduciendo: ${foundSong.title} veces reproducidas: ${foundSong.plays}`)
    }

    getFavorites(minPlays){
        const getFav = this.songs.filter(play => play.plays >= minPlays)
        if(getFav.length == 0){
            console.error("no se encontro esa cancion");
            return;
        }
        return getFav;
    }
}
module.exports = PlayListManager;