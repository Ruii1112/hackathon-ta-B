'use strict';
function getUserName(){
    const userName = $('#userName').val();
    // console(userName);
    return userName
}
// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = getUserName();
    // ユーザ名が未入力でないかチェックする
    if (userName === ""){
        alert("ユーザ名を入力してください");
    }else{
        $('form').submit();
    }
}
