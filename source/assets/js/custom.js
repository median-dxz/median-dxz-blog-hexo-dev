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
    //console.log(e);
    if (e.className == "wordcount") {
      $(e).remove();
    }
  }
});

console.log(
  "%c Thank you for viewing! %c 降り止まない雨などない",
  "color: #fff; background: #222; padding:8px 3px;",
  "color: #222; background: #eee; padding:8px 3px;"
);
