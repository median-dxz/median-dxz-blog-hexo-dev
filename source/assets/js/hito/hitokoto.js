async function hito_show(id) {
  let d;

  d = await hito(id || undefined);

  let txt = "<p class='hito-cont'> " + d.content + " </p>" + "<i class='hito-quote'> ——" + d.quote + "</i>";
  //console.log(txt);
  if ($(".hito-text").length === 0) {
    $(".site-subtitle").append("<div class='hito-text'></div>");
  }
  $(".hito-text").html(txt);
}

async function hito(id) {
  let data = await $.getJSON("/assets/js/hito/hitokoto.json");
  let hito_data = data.hitokotos;
  let tot = parseInt(data.tot);
  id = id || Math.floor(Math.random() * Math.pow(10, Math.log10(tot) + 1)) % tot;

  //console.log(id);
  return hito_data[id];
}

export { hito_show };
