'use strict';

// ユーザ名取得関数
function getUserName(){
    const userName = $('#userName').val();
    return userName
}

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = getUserName();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent', userName);
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitEvent', function (data) {
    $('#thread').prepend('<p>' + data + 'さんが退室しました' + '</p>');
});
