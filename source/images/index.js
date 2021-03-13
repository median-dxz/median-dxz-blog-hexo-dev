/* eslint-disable no-undef */
var img_num = 9;

$(() => {
    for (let i = 1; i <= img_num; i++) {
        addImg(i);
    }

    let songId = [471795, 426502173, 26125390, 30431342];
    let song = new Array(5);
    let pm = [];
    for (let i = 0; i < songId.length; i++) {
        pm.push(getMusicMetaAsync(songId[i], 'netease').then((v) => (song.push(v))));
    }
    Promise.all(pm)
        .then(() =>
            getMusicMetaAsync('000uX2eS4NlvrX', 'tencent').then((v) => {
                song[4] = v;
            })
        )
        .then(() => {addMusicMeta(song, ap_img)});
});

function addImg(img_id) {
    let el = $('#page');
    let newel = $("<div class='ImgList'></div>").append(
        $('<a></a>').attr({
            href: 'bg_alt_' + String(img_id) + '.jpg',
            target: '_Blank',
        })
    );
    newel.children(':first-child').append(
        $('<img></img>').attr({
            class: 'il',
            src: 'bg_alt_' + String(img_id) + '.jpg',
        })
    );
    el.append(newel);
}
