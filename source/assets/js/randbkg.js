var bkg_n = (Math.floor(Math.random() * 10) % 9) + 1;

$(window).resize(() => {
  randbkg();
});

function randbkg() {
  if (window.innerWidth <= 1000) {
    $("body").css({
      "background-image": "none",
    });
  } else {
    $("body").css({
      "background-image": 'url("/images/bg_alt_' + String(bkg_n) + '.jpg")',
    });
  }
}

export { randbkg };
