var bkg_n = (Math.floor(Math.random() * 10) % 9) + 1;

$(document).on("ready", () => {
  randbkg();
});

$(window).resize(() => {
  randbkg();
});

function randbkg() {
  if (window.innerWidth <= 1000) {
    $("body").css({
      "background-image": "none"
    });
  } else {
    $("body").css({
      "background-image": 'url("/img/bg_alt_' + String(bkg_n) + '.jpg")'
    });
  }
}
