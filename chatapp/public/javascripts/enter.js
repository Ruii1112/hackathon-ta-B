'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = 'aaaaaaaaaa';
// 入室メッセージイベントを送信する


// サーバから受信した入室メッセージを画面上に表示する
socket.on('sendMessageEvent', function (data) {
    $('#thread').prepend('<p>' +  data +  '</p>');
});
