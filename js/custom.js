/*
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies"); 

    if (!cookieAlert) {
       return;
    }

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    // Show the alert if we cant find the "acceptCookies" cookie
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    if (getCookie("acceptCookies")) {
        document.getElementById('mainimg').style.visibility = 'hidden';
        document.getElementById('header').style.visibility = 'visible';
        document.getElementById('main').style.visibility = 'visible';
        document.getElementById('footer').style.visibility = 'visible';
        document.getElementById('nav').style.visibility = 'visible';
    }

    // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);;
        cookieAlert.classList.remove("show");

        // dispatch the accept event
        window.dispatchEvent(new Event("cookieAlertAccept"))
    });

    // Cookie functions from w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();


//show všeho na začátku stránky
function hideShowEverything() {
    document.getElementById('mainimg').style.visibility = 'hidden';
    document.getElementById('header').style.visibility = 'visible';
    document.getElementById('main').style.visibility = 'visible';
    document.getElementById('footer').style.visibility = 'visible';
    document.getElementById('nav').style.visibility = 'visible';
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