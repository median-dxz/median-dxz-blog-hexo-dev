/* eslint-disable no-unused-vars */
async function getMusicRepAsync(songid, plat) {
    var url = 'https://api.i-meto.com/meting/api?server=%plat%&type=song&id=%id%&r=song';
    url = url.replace('%id%', String(songid)).replace('%plat%', plat);
    return $.getJSON(url).promise();
}

function getMusicMetaByRep(rep) {
    rep = rep[0];
    return { name: rep.title, artist: rep.author, url: rep.url, cover: rep.pic, lrc: rep.lrc };
}
