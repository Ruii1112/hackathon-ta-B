'use strict';

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/database.db");

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        db.run('delete from users where id="' + data[0] + '"');
        socket.broadcast.emit('receiveExitEvent', data)
    })
//    
//    socket.on('disconnect', () => {
//        console.log('disconnection: ' + userName);
//        if (userName !== '') {
//            db.run('delete from users where id="' + id + '"');
//            socket.broadcast.emit('receiveExitEvent', [id, userName]);
//        };
//    });
};

