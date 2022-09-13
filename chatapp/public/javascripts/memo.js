"use strict";

// 入力されたメッセージ内容の取得関数
function getMemo() {
    const memo = $("#message").val();
    return memo;
}

//　ユーザ名の取得関数
// function getName(){
//     const name = $('#userName').val();
//     return name
// }

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    // const userName = getName();
    // 入力されたメッセージを取得
    const message = getMemo();
    const time = new Date();
    const today = `[${
        time.getMonth() + 1
    }月${time.getDay()}日${time.getHours()}時${time.getMinutes()}分${time.getSeconds()}秒]`;

    const check = message.replace(/\s+/g, "");
    if (check === "") {
        alert("空では投稿できません");
    } else {
        $("#thread").prepend(
            '<div class="thread-message self-memo"><p>自分へのメモ: ' +
                today +
                "<br>" +
                message.replace(/\n+/g, "<br> ") +
                "</p><div>"
        );
        $("#message").val("");
    }
}
