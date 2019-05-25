var tot;
var hito_data;

function hito_show(id) {
	let d;
	if (!id) {
		d = hito();
	}else{
		d = hito(id);
	}
  
  let txt =
    "<p class='hito-cont'> " +
    d.content +
    " </p>" +
    "<i class='hito-quote'> ——" +
    d.quote +
    "</i>";
  console.log(txt);
  $("#hitotxt").html(txt);
  let h = $(".header-inner").height()+12;
  $("aside").css('margin-top',h.toString()+'px')
}

function hito(id) {
  $.ajaxSettings.async = false;
  $.getJSON("/js/hito/hitokoto.json", function(data) {
    hito_data = data.hitokotos;
    tot = parseInt(data.tot);
  });
  if (!id) {
    id = Math.floor(Math.random() * Math.pow(10, Math.log10(tot) + 1)) % tot;
  }
  console.log(id);
  return hito_data[id];
}
