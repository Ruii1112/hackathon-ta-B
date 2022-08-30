'use strict';

// ユーザ名取得関数
function getUserName(){
    const userName = $('#userName').val();
    return userName
}

// 入力されたメッセージ内容の取得関数
function getMessage(){
    const message = $('#message').val();
    return message
}

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = getUserName();
    // 入力されたメッセージを取得
    const message = getMessage();
    const check = message.replace(/\s+/g, '');
    if(check === ''){
        alert("空では投稿できません。");
    }else{
        $('#message').val('');
        // 投稿内容を送信
        socket.emit('sendMessageEvent', userName + 'さん: ' + message);
    }
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
