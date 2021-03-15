var randNum = (tot) => Math.floor(Math.random() * Math.pow(10, Math.log10(tot) + 1)) % tot;
var changeStickyIcon = () => {
    $('.post-sticky-flag').html('<i class="fas fa-caret-up"></i>');
};
var bkg = {};
var hito = {};

$(() => {
    //set bkg
    $.getJSON('/assets/js/bkg/bkg.json').done((data) => {
        bkg.total = data.total;
        bkg.index = randNum(bkg.total) + 1;
        bkgSet(bkg.index);
    });

    //show hitokoto
    $.getJSON('/assets/js/hito/hitokoto.json').done((data) => {
        hito.total = data.total;
        hito.index = randNum(hito.total);
        hito.data = data.hitokotos;
        $('.site-subtitle').append("<div class='hito'></div>");
        hitoShow(hito.data[hito.index]);
    });

    //sticky icon modify
    changeStickyIcon();

    //close default wordcount column
    if ($('.footer-inner .wordcount').length >= 0) {
        $('.footer-inner .wordcount')[0].remove();
    }
});

document.addEventListener('pjax:success', () => {
    changeStickyIcon();
});

$(window).on('resize', () => {
    bkgSet(bkg.index);
});

function hitoShow(hito) {
    let t = `<p class='hito-content'>${hito.content}</p><i class='hito-quote'> ——${hito.quote}</i>`;
    //console.log(t);
    $('.hito').html(t);
}

function bkgSet(index) {
    if (window.innerWidth <= 990) {
        $('body').css({
            'background-image': 'none',
        });
    } else {
        $('body').css({
            'background-image': 'url("/images/bg_alt_' + index + '.jpg")',
        });
    }
}

console.log(
    '%c Thank you for viewing! %c 降り止まない雨などない',
    'color: #fff; background: #222; padding:8px 3px;',
    'color: #222; background: #eee; padding:8px 3px;'
);
