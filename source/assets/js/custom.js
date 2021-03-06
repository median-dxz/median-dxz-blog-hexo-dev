import { randbkg } from "./randbkg.js";
import { hito_show } from "./hito/hitokoto.js";

$(() => {
  randbkg();
  hito_show();
  $(".post-sticky-flag").html('<i class="fas fa-caret-up"></i>');
  const observer = new MutationObserver(function (mutationsList, observer) {
    $(".post-sticky-flag").html('<i class="fas fa-caret-up"></i>');
  });
  observer.observe($("main")[0], { childList: true });

  for (let i = 0; i < $(".footer-inner").children().length; i++) {
    let e = $(".footer-inner").children()[i];
    console.log(e);
    if (e.className !== "copyright" && e.className !== "custom_footer") {
      $(e).remove();
    }
  }

});
