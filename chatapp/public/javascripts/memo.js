'use strict';


function getMemo(){
    const memo = $('#message').val();
    return memo
}

function getName(){
    const name = $('#userName').val();
    return name
}
// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = getName();
    // 入力されたメッセージを取得
    const message = getMemo();
    // メモの内容を表示
    $('#thread').prepend('<p>' + userName + 'さん' + '：' + message +'</p>');

    return false;
}
