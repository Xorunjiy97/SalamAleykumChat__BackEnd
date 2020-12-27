const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;

        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.post('/checkUser', this.onChekUser);
        this._app.get('/getChat', this.onGetChat);
        this._app.post('/addNewMessage', this.addNewMessage);
        this._app.post('/deleteUser', this.userOff);
    }

    onGetChat = (req, res) => {
        const chat = this._db.getChat();

        res.send(chat);
        res.end();
    }

    onChekUser = (req, res) => {
        const { body } = req.json();
        const check = this._db.getUser(body);

        res.send(check);
        res.end();
    }

    addNewMessage = (req, res) => {
        console.log(req);
        const { body } = req.json();

        this._db.setMessage(body);

        res.end();
    }

    userOff = (req, res) => {
        const { body } = req.json();
        const deleteUser = this._db.deleteUser(body);

        res.send(deleteUser);
        res.end();
    }
}

module.exports = App;
