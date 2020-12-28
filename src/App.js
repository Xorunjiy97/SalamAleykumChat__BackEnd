const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;

        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.use(this.headerCors);

        this._app.post('/addUser', this.onChekUser);
        this._app.get('/getChat', this.onGetChat);
        this._app.post('/addMessage', this.addNewMessage);
        this._app.delete('/deleteUser', this.userOff);
    }

    getApp = () => this._app;

    onGetChat = (req, res) => {
        const chat = this._db.getChat();

        res.send(chat);
        res.end();
    }

    onChekUser = (req, res) => {
        const { userName } = req.body;
        const check = this._db.getUser(userName);

        res.send(check);
        res.end();
    }

    addNewMessage = (req, res) => {
        const { body } = req;

        this._db.setMessage(body);

        res.end();
    }

    userOff = (req, res) => {
        const { body } = req;
        this._db.deleteUser(body);

        res.end();
    }

    headerCors = (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
        next();
    }
}

module.exports = App;
