var dynamicJsLoader = async (path) => {
    var e = document.getElementsByClassName('pjax')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    var promise = new Promise(function(resolve, reject) {
        script.onload = resolve;
    });
    e.appendChild(script);
    return promise;
};
//sticky icon modify
var changeStickyIcon = () => {
    $('.post-sticky-flag').html('<i class="fas fa-caret-up"></i>');
};

var runMusicTC = async () => {
    await dynamicJsLoader('/assets/js/music/getMusic.js');
    await dynamicJsLoader('/assets/js/music/APlayer.min.js');
    let ap_tc = new APlayer({
        container: document.getElementById('tc-aplayer'),
        lrcType: 3,
        listMaxHeight: 90,
        listFolded: true,
        audio: [],
    });
    let obj = await getMusicRepAsync(27698501, 'netease');
    obj = getMusicMetaByRep(obj);
    ap_tc.list.add(obj);
};

export default () => {
    let path = window.location.pathname;
    path = path.split('/');
    switch (path[1]) {
        case '':
            changeStickyIcon();
            break;
        case 'changelog':
            runMusicTC();
            break;
        default:
            break;
    }
};
