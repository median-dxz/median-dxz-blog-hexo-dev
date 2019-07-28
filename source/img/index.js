/*global $ */

window.onload = (e) => {
  for (let i = 1; i <= 8; i++) {
    AddImg(i);
  }
};

function AddImg(img_id) {
  let el = $("#page");
  let newel = $("<div class='ImgList'></div>").append(
    $("<a></a>").attr({
      href: "bg_alt_" + String(img_id) + ".jpg"
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
