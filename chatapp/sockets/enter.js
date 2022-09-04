'use strict';

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/database.db");
db.run('create table if not exists users(id integer, name text)')
db.run('delete from users');

let id = 0;

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', function (data) {
        socket.broadcast.emit('receiveEnterEvent', [id, data]);
        socket.emit('sendIdEvent', id);
        db.all("select * from users", (err, row) => {
            if (err) {
                console.error(err.message);
            }
            let userList = "";
            row.forEach(person => {
                userList += "<p id=list" + person.name + person.id + ">" + person.name + "</p>";
            });
            socket.emit('makeUserListEvent', userList)
            db.run('insert into users values(' + id++ + ', "' + data + '")')
        });
    });

    socket.on('userNameJudge', function(data){
        let check = 0;
        db.all("select * from users", (err, row) => {
            if (err) {
                console.error(err.message);
            }
            row.forEach(person => {
                if (data === person.name){
                    check = 1;
                }
            })
            socket.emit('receiveUserJudege', check);
        });
    });
};
