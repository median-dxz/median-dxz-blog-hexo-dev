/* eslint-disable no-undef */
/*global $ */
var img_num = 9;

$(document).ready(() => {
  for (let i = 1; i <= img_num; i++) {
    AddImg(i);
  }

  let songid = [471795, 426502173, 26125390, 30431342];
  let song = new Array(5);

  getMusicMetaAsync(songid[0], "netease")
    .done(v => {
      song[0] = v;
    })
    .then(()=>getMusicMetaAsync(songid[1], "netease"))
    .done(v => {
      song[1] = v;
    })
    .then(()=>getMusicMetaAsync(songid[2], "netease"))
    .done(v => {
      song[2] = v;
    })
    .then(()=>getMusicMetaAsync(songid[3], "netease"))
    .done(v => {
      song[3] = v;
    })
    .then(()=>getMusicMetaAsync("000uX2eS4NlvrX", "tencent"))
    .done(v => {
      song[4] = v;
      addMusicMeta(song, ap_img);
    });
});

function AddImg(img_id) {
  let el = $("#page");
  let newel = $("<div class='ImgList'></div>").append(
    $("<a></a>").attr({
      href: "bg_alt_" + String(img_id) + ".jpg",
      target: "_Blank"
    })
  );
  newel.children(":first-child").append(
    $("<img></img>").attr({
      class: "il",
      src: "bg_alt_" + String(img_id) + ".jpg"
    })
  );
  el.append(newel);
}
