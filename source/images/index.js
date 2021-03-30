/* eslint-disable no-undef */
var img_num = 9,
    ap_img,
    p_info;

$(async () => {
    p_info = await $.getJSON('/assets/js/bkg/bkg.json');

    img_num = p_info['total'] ;
    p_info = p_info['image_info'];

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

function addImg(i) {
    let e = $("<div class='ImgList'></div>").append([
        $('<a target="_Blank"></a>').attr({
            href: 'bg_alt_' + String(i) + '.jpg',
        }),
        $("<div class='PInfo'></div>").html(
            p_info[i - 1]['name'] + "<br />Author: "+p_info[i - 1]['author'] + "<br />pid: "+ p_info[i - 1]['pid']
        ),
    ]);
    e.children(':first-child').append(
        $('<img></img>').attr({
            class: 'il',
            src: 'bg_alt_' + String(i) + '.jpg',
        })
    );
    $('#page').append(e);
}
