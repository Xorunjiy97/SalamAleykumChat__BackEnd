class Model {
    constructor() {
        this._messages = [{user: 'Alyosha', message: 'mau'}];

        this.logedUsers = [];
    }

    getMessages = () => this._messages;

    addNewMessage = newMessage => {
        this._messages.push(newMessage);
    };

    deleteUserFromDb = userName => {
        this.logedUsers = this.logedUsers.filter(user => userName === user);
    };

    addUserToDb = newUser => {
        const check = this.logedUsers.some(user => newUser === user);
        // console.log(check);
        if(check){
            return false;
        } else {
            this.logedUsers.push(newUser);
            return true;
        }
    };
}

module.exports = Model;
