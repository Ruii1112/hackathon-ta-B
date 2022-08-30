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

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    $('#thread').prepend('<p>' +  data + 'さんが入室しました' + '</p>');
});



let form = document.getElementById('message');
form.addEventListener('keypress', event_key);
function event_key(e) {
  	if (e.keyCode === 13 && e.shiftKey === true) {
        e.preventDefault();
        document.getElementById("room-publish_button").click();
	}  
		return false;
}

