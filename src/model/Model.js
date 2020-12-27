class Model {
    constructor() {
        this.chat = [];
        this.users = null;
    }

    getChat = () => this.chat;
    getUsers = () => this.users;

    setMessage = newMessage => {
        this.chat.push(newMessage);
    }

    deleteUser = user => {
        const currUser = this.users.indexOf(user);
        this.users.splice(currUser);
        
        return true;
    }

    addUser = newUser => {
        this.users.push(newUser);
    }

    getUser = newUser => {
        const currUser = this.users.indexOf(newUser);
        if(currUser =! -1){
            return false;
        }else{
           this.addUser(newUser);
           return true;
        }
    }
}

module.exports = Model;
