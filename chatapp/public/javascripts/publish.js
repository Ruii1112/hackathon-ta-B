'use strict';

let flag = 0;
let time = 0;

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
        let now = new Date();
        // 投稿内容を送信
        if(flag === 0 && (time === 0 || now.getTime() - time.getTime() > 60000)){
            socket.emit('sendMessageEvent', [userName,message]);
            flag = 1;
            time = new Date();
        }else if(flag === 1){
            alert("連続の投稿はできません。");
        }else{
            alert("1分経ってから投稿してください。");  
        }
    }
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    if ($('#room-sort_button').val() === '古い順'){
        if(data[0] === getUserName()){
            $('#thread').prepend('<p>' + data[0] + 'さん：' + '<b>' + data[1] + '</b></p>');
        }else{
            $('#thread').prepend('<p>' + data[0] + 'さん：' + data[1] + '</p>');
            flag = 0;
        }
    }else {
        if(data[0] === getUserName()){
            $('#thread').append('<p>' + data[0] + 'さん：' + '<b>' + data[1] + '</b></p>');
        }else{
            $('#thread').append('<p>' + data[0] + 'さん：' + data[1] + '</p>');
            flag = 0;
        }
    }

    
});
