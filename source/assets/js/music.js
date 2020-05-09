/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var ap_img, ap_def;

$(document).ready(() => {
  if (document.getElementById("img-aplayer") !== null) {
    ap_img = new APlayer({
      container: document.getElementById("img-aplayer"),
      fixed: true,
      lrcType: 1,
      listMaxHeight: 90,
      listFolded: true,
      audio: []
    });
  }
  if (document.getElementById("def-aplayer") !== null) {
    ap_def = new APlayer({
      container: document.getElementById("def-aplayer"),
      lrcType: 3,
      listMaxHeight: 90,
      listFolded: true,
      audio: []
    });
  }
});

function getMusicMetaAsync(songid, plat) {
  var url = "https://api.i-meto.com/meting/api?server=%plat%&type=song&id=%id%&r=song";
  url = url.replace("%id%", String(songid)).replace("%plat%", plat);

  var rep;
  var defer = $.Deferred();

  var f = $.getJSON(url, (data, status, xhr) => {
    if (status === "success") {
      rep = data[0];
      defer.resolve({ name: rep.title, artist: rep.author, url: rep.url, cover: rep.pic, lrc: rep.lrc });
    }
  });

  return defer;
}

function addMusicMeta(mobj, ap) {
  ap.list.add(mobj);
}
