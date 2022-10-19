'use strict';
function Debouncer(e) {
    this.callback = e, this.ticking = !1;
}
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, Fluid.utils = {
    listenScroll: function (e) {
        var t = new Debouncer(e);
        return window.addEventListener('scroll', t, !1), t.handleEvent(), t;
    },
    unlistenScroll: function (e) {
        window.removeEventListener('scroll', e);
    },
    scrollToElement: function (e, t) {
        var n = jQuery(e).offset();
        n && jQuery('html,body').animate({
            scrollTop: n.top + (t || 0),
            easing: 'swing'
        });
    },
    elementInViewport: function (e, t) {
        t = t || 1;
        var n = e.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = n.top;
        return 0 <= o && o <= i * (t + 1) || o <= 0 && o >= -i * t - n.height;
    },
    waitElementVisible: function (e, n, t) {
        var i = 'undefined' != typeof window, o = i && !('onscroll' in window) || 'undefined' != typeof navigator && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent), r = 'IntersectionObserver' in window;
        if (i && !o) {
            var a;
            a = 'string' == typeof e ? document.querySelector(e) : e;
            var c = t || 2;
            if (Fluid.utils.elementInViewport(a, c))
                n();
            else if (r)
                new IntersectionObserver(function (e, t) {
                    e[0].isIntersecting && (n(), t.disconnect());
                }, {
                    threshold: [0],
                    rootMargin: (window.innerHeight || document.documentElement.clientHeight) + 'px'
                }).observe(a);
            else
                var s = Fluid.utils.listenScroll(function () {
                    Fluid.utils.elementInViewport(a, c) && (Fluid.utils.unlistenScroll(s), n());
                });
        } else
            n();
    },
    waitElementLoaded: function (n, i) {
        var e = 'undefined' != typeof window, t = e && !('onscroll' in window) || 'undefined' != typeof navigator && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);
        e && !t ? 'MutationObserver' in window ? new MutationObserver(function (e, t) {
            document.getElementById(n) && (i(), t.disconnect());
        }).observe(document, {
            childList: !0,
            subtree: !0
        }) : document.addEventListener('DOMContentLoaded', function () {
            i();
        }) : i();
    },
    createScript: function (e, t) {
        var n = document.createElement('script');
        n.setAttribute('src', e), n.setAttribute('type', 'text/javascript'), n.setAttribute('charset', 'UTF-8'), n.async = !1, 'function' == typeof t && (window.attachEvent ? n.onreadystatechange = function () {
            var e = n.readyState;
            'loaded' !== e && 'complete' !== e || (n.onreadystatechange = null, t());
        } : n.onload = t);
        var i = document.getElementsByTagName('script')[0] || document.getElementsByTagName('head')[0] || document.head || document.documentElement;
        i.parentNode.insertBefore(n, i);
    },
    createCssLink: function (e) {
        var t = document.createElement('link');
        t.setAttribute('rel', 'stylesheet'), t.setAttribute('type', 'text/css'), t.setAttribute('href', e);
        var n = document.getElementsByTagName('link')[0] || document.getElementsByTagName('head')[0] || document.head || document.documentElement;
        n.parentNode.insertBefore(t, n);
    },
    loadComments: function (e, t) {
        var n = document.querySelector('#comments[lazyload]');
        n ? Fluid.utils.waitElementVisible(e, function () {
            t(), n.removeAttribute('lazyload');
        }, CONFIG.lazyload.offset_factor) : t();
    }
}, Debouncer.prototype = {
    constructor: Debouncer,
    update: function () {
        this.callback && this.callback(), this.ticking = !1;
    },
    requestTick: function () {
        this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    },
    handleEvent: function () {
        this.requestTick();
    }
};