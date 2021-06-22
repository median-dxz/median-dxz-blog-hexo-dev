var dynamicJsLoader = async (path) => {
    var e = document.getElementsByClassName('pjax')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    var promise = new Promise(function (resolve, reject) {
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

var loaderCommmitData = async () => {
    let res = await $.getJSON('/changelog/data.json');
    let commits = [];
    let totalCommitTimes = 0;
    let cur = 0;
    let curYear = new Date().getFullYear() + 1;
    let templateCommit = (e) => `
    <div class="container-commit animated fadeInDown">
        <span class="commit-icon"><i class="fab fa-git-alt"></i></span>
        <div class="commit-header">${e.message}</div>
        <span class="commit-content commit-hash"><a href="${e.commitUrl}">${e.hash}</a></span>
        <span class="commit-content commit-time">committed date: <br />${e.committedDate.toLocaleString()}</span>
        <span class="commit-content commit-pushTime"></span>
        <span class="commit-content commit-files">changed files: ${e.changedFiles}</span>
        <span class="commit-content commit-additions">+ ${e.additions}</span>
        <span class="commit-content commit-deletions">- ${e.deletions}</span>
    </div>
    `;
    let templateYear = (e) => `
    <div class="container-year">
        <span class="year-content">${e}</span>
    </div>
    `;
    totalCommitTimes = res.totalCommitTimes;
    commits = res.commits;
    commits = commits.map((e) => {
        e.committedDate = new Date(e.committedDate);
        e.hash = e.commitUrl.split('/').slice(-1)[0].slice(0, 6);
        return e;
    });
    return (more) => {
        let index;
        for (index = 0; index < more; index++) {
            const e = commits[cur + index];
            let committedYear = e.committedDate.getFullYear();
            if (committedYear < curYear) {
                curYear = committedYear;
                $('.container-changelog').append(templateYear(curYear));
            }
            $('.container-changelog').append(templateCommit(e));
        }
        cur += index;
    };
};

export default () => {
    let path = window.location.pathname;
    let addCommits;
    path = path.split('/');
    switch (path[1]) {
        case '':
            changeStickyIcon();
            break;
        case 'changelog':
            //runMusicTC();
            loaderCommmitData().then((f) => {
                f(15);
            });
            break;
        default:
            break;
    }
};
