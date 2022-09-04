'use strict';

// ユーザ名取得関数
function getUserName(){
    const userName = $('#userName').val();
    return userName
}

let id = 0;

socket.on('sendIdEvent', (data) => {
    id = data;
})

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = getUserName();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent', [id, userName]);
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitEvent', function (data) {
    $('#thread').prepend('<p>' + data[1] + 'さんが退室しました' + '</p>');
    $(`#list${data[1] + data[0]}`).remove();
});
