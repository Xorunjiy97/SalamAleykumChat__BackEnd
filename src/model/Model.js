class Model {
    constructor() {
        this.chat = [{ userName: 'sasha', message: 'salam alllll' }, { userName: 'sasha', message: 'salam alllll' }];
        this.users = [];
    }

    getChat = () => this.chat;
    getUsers = () => this.users;

    setMessage = newMessage => {
        this.chat.push(newMessage);
    }

    deleteUser = userName => {
        this.users = this.users.filter(user => userName === user);
    }

    addUser = newUser => {
        this.users.push(newUser);
    }

    getUser = newUser => {
        const check = this.users.some(user => newUser === user);
        if(check){
            return false;
        } else {
            this.addUser(newUser);
            return true;
        }
    }
}

module.exports = Model;
