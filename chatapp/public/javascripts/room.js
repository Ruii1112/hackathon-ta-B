'use strict';

//投稿のソート関数
function sort(){
    //投稿のソート
    const publish_html = document.getElementById('thread');
    let string = publish_html.innerHTML;
    let publish_list = string.split('</p>');
    document.querySelector('#thread').innerHTML = '';
    for(let i = 0 ; i < publish_list.length ; i++){
        $('#thread').prepend(publish_list[i] + '</p>');
    }
    //ボタンの表示切り替え
    const btn_value = $('#room-sort_button').val();
    if (btn_value === '古い順'){
        $('#room-sort_button').val('新しい順');
    }else if (btn_value === '新しい順'){
        $('#room-sort_button').val('古い順');
    }
}