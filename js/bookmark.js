'use strict';
window.addEventListener('DOMContentLoaded', function () {
    function n() {
        localStorage.setItem('bookmark' + location.pathname, window.scrollY);
    }
    function e() {
        var n = localStorage.getItem('bookmark' + location.pathname);
        n = parseInt(n, 10), isNaN(n) || '' !== location.hash || window.anime({
            targets: document.scrollingElement,
            duration: 200,
            easing: 'linear',
            scrollTop: n
        });
    }
    var o, t;
    o = CONFIG.bookmark.save, t = document.querySelector('.book-mark-link'), window.addEventListener('scroll', function () {
        return t.classList.toggle('book-mark-link-fixed', 0 === window.scrollY);
    }), 'auto' === o && (window.addEventListener('beforeunload', n), window.addEventListener('pjax:send', n)), t.addEventListener('click', function () {
        n(), window.anime({
            targets: t,
            duration: 200,
            easing: 'linear',
            top: -30,
            complete: function () {
                setTimeout(function () {
                    t.style.top = '';
                }, 400);
            }
        });
    }), e(), window.addEventListener('pjax:success', e);
});