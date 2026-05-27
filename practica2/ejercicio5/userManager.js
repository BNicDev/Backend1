const fs = require('fs/promises');

class UserManager{
    constructor(path){
        this.path = path
    }

    async getUsers(){
        try{
            const contenido = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(contenido);
        }catch(error){
            if(error.code === 'ENOENT'){
                return[];
            }
            console.error("Error al leer los usuarios:", error);
            return[]
        }
    }

    async addUser(user){
      try{
        const listUsers = await this.getUsers();

        let newId = 1;
        if(listUsers.length > 0){
            newId = listUsers[listUsers.length -1].id + 1;
        }

        const newUser = {
            id: newId,
            ...user
        };

        listUsers.push(newUser);

        const datosATexto = JSON.stringify(listUsers, null, 2);

        await fs.writeFile(this.path, datosATexto, 'utf-8');

        console.log(`Usuario ${newUser.name || 'sin nombre'} agregado con exito, su ID es : ${newId}`)
        return newUser
      }catch(error){
        console.error("no se pudo agregar el usuario al archivo:", error)
      }
    }

    async deleteUser(userId){
        try{
            const listUsers = await this.getUsers();

            if(listUsers.length===0){
                console.error('ERROR: no hay elementos para eliminar');
                return;
            }

            const existe = listUsers.some(user => user.id ===userId);
            if(!existe){
                console.error(`ERROR: no se encontro ningun usuario coon el ID: ${userId}`);
                return;
            }
            
            const filteredList = listUsers.filter(user=> user.id !== userId);

            const datosATexto = JSON.stringify(filteredList, null , 2);

            await fs.writeFile(this.path, datosATexto, 'utf-8');

            console.log(`usuario con ID ${userId} eliminado con exito`)


        }catch(error){
            console.error(`ERROR: el usuario con el id ${userId} no se ha podido eliminar`)
        }
    }
}

module.exports = UserManager;