/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var ap_img,ap_def;

$(document).ready(() => {
  if (document.getElementById("img-aplayer") !== null) {
    ap_img = new APlayer({
      container: document.getElementById("img-aplayer"),
      lrcType: 3,
      listMaxHeight: 90,
      listFolded: true,
      audio: []
    });
  }
  if (document.getElementById("def-aplayer")) {
    ap_def = new APlayer({
      container: document.getElementById("def-aplayer"),
      lrcType: 3,
      listMaxHeight: 90,
      listFolded: true,
      audio: []
    });
  }
});

//   const colorThief = new ColorThief();
//   const setTheme = index => {
//     if (!ap.list.audios[index].theme) {
//       colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
//         ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
//       });
//     }
//   };
//   setTheme(ap.list.index);
//   ap.on("listswitch", index => {
//     setTheme(index);
//   });

function getMusicMeta(songid, ap, plat, callback) {
  let url = "https://api.i-meto.com/meting/api?server=%plat%&type=song&id=%id%&r=song";
  let rep;
  url = url.replace("%id%", String(songid)).replace("%plat%", plat);
  $.getJSON(url, (data, status, xhr) => {
    if (status === "success") {
      rep = data[0];
      callback(
        {
          name: rep.name,
          artist: rep.artist,
          url: rep.url,
          cover: rep.cover,
          lrc: rep.lrc
        },
        ap
      );
    }
  });
}

function addMusicMeta(mobj, ap) {
  ap.list.add(mobj);
}
