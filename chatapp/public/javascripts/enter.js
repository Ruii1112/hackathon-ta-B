'use strict';

// 入室メッセージをサーバに送信する
function getUserName(){
    const userName = $('#userName').val();
    return userName
}
// 入力されたユーザ名を取得する
const userName = getUserName();
// 入室メッセージイベントを送信する
socket.emit('sendEnterEvent', userName);

socket.on('makeUserListEvent', function (data) {
    $('#users').prepend(data);
    $('#users').prepend('<p class="username">' + userName + '(自分)</p>');
})

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    // data[0] = id, data[1] = name
    $('#thread').prepend('<p>' + data[1] + 'さんが入室しました' + '</p>');
    $('#users').append('<p id=list' + data[1] + data[0] + '>' + data[1] + '</p>');
});

//Shift+Enterで投稿
let form = document.getElementById('message');
form.addEventListener('keypress', event_key);
function event_key(e) {
  	if (e.keyCode === 13 && e.shiftKey === true) {
        e.preventDefault();
        publish();
	}  
		return false;
}

