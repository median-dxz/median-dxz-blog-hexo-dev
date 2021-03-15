/* eslint-disable no-undef */
var img_num = 9,
    ap_img;

$(async () => {
    for (let i = 1; i <= img_num; i++) {
        addImg(i);
    }

    ap_img = new APlayer({
        container: document.getElementById('img-aplayer'),
        fixed: true,
        lrcType: 1,
        listMaxHeight: 90,
        listFolded: true,
        audio: [],
    });

    let songId = [471795, 426502173, 26125390, 30431342];
    let promises = [];
    songId.forEach((e) => {
        promises.push(getMusicRepAsync(e, 'netease'));
    });
    promises.push(getMusicRepAsync('000uX2eS4NlvrX', 'tencent'));
    try {
        let rep = await Promise.all(promises);
        let song = rep.map((v) => getMusicMetaByRep(v));
        ap_img.list.add(song);
    } catch (err) {
        console.error(err);
    }
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
