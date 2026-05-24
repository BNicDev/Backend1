class UserManager{
    constructor(){
        this.users=[];
        this.currentId = 1;
    }

    registerUser(username, email,password,role){
        //validamos si los campos son existentes
        if(!username || !email || !password || role === 'user'){
            console.error("Error: los campos son obligatorios");
            return;
        }
        //validamos si el email y username no se repiten
        const userRepeat = this.users.some(users => users.username === username);
        const emailRepeat = this.users.some(users => users.email === email);
        if(userRepeat){
            console.error(`Error: el usuario ${username} ya existe`);
            return;
        }else if(emailRepeat){
            console.error(`Error: el email ${email} ya existe`);
            return;
        }

        const newUser = {
            id: this.currentId,
            username,
            email,
            password,
            role,
            active : true
        }

        this.users.push(newUser);
        this.currentId ++;
        console.log(`usuario ${username} agregado con exito!`);
    }

    getUser(){
        return this.users;
    }

    getUsersById(id){
        const foundUsers = this.users.find(user => user.id === id);

        if(!foundUsers){
            console.error("Not Found")
            return;
        }
        return foundUsers;
    }

    getUsersByRole(role){
        const foundRole = this.users.filter(user => user.role === role);

        if(foundRole.length == 0){
            console.error("Users not Found")
            return;
        }
        return foundRole;
    }
}
module.exports = UserManager;
