//show všeho na začátku stránky
function hideShowEverything() {
    document.getElementById('mainimg').style.visibility = 'hidden';
    document.getElementById('header').style.visibility = 'visible';
    document.getElementById('main').style.visibility = 'visible';
    document.getElementById('footer').style.visibility = 'visible';
    document.getElementById('nav').style.visibility = 'visible';
    document.getElementById('calert').style.visibility = 'visible';
}

var cookieAlert = document.querySelector(".cookiealert");
var dontAccept = document.querySelector(".dontaccept");

dontAccept.addEventListener("click", function () {
    cookieAlert.classList.remove("show");
    hideShowEverything();
})

//navbar close na touch/click venku
function hidenavbar(e) {
    if ($('#collapse_target').hasClass('show')) {
        $('#collapse_target').collapse('hide')
    }
}

document.addEventListener("click", hidenavbar);

//hide na ostatní content = otevřeno bude jen jedno okno
function contentHide(e) {
    if ($('.togglecontent').hasClass('show')) {
        $('#collapse_section1').collapse('hide')
        $('#collapse_section2').collapse('hide')
        $('#collapse_section3').collapse('hide')
        $('#collapse_section4').collapse('hide')
        $('#collapse_section5').collapse('hide')
        $('#collapse_section6').collapse('hide')
    }
}

document.addEventListener("click", contentHide);