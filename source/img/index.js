/* eslint-disable no-undef */
/*global $ */

$(document).ready(() => {
  for (let i = 1; i <= 9; i++) {
    AddImg(i);
  }
  [471795, 426502173, 26125390, 30431342].forEach(v => {
    getMusicMeta(v, ap_img, "netease", addMusicMeta);
  });
  getMusicMeta("000uX2eS4NlvrX", ap_img, "tencent", addMusicMeta);
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
