'use strict';

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/database.db");
db.run('create table if not exists users(id integer, name text)')
db.run('delete from users');

let id = 0;

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', function (data) {
        db.run('insert into users values(' + id++ + ', "' + data + '")')
        socket.broadcast.emit('receiveEnterEvent', data);
    });
};
