'use strict';
HTMLElement.prototype.wrap = function (n) {
    this.parentNode.insertBefore(n, this), this.parentNode.removeChild(this), n.appendChild(this);
}, Fluid.events = {
    registerNavbarEvent: function () {
        var n = jQuery('#navbar'), o = jQuery('#navbar .dropdown-menu');
        0 < n.offset().top && (n.removeClass('navbar-dark'), o.removeClass('navbar-dark')), Fluid.utils.listenScroll(function () {
            n[50 < n.offset().top ? 'addClass' : 'removeClass']('top-nav-collapse'), o[50 < n.offset().top ? 'addClass' : 'removeClass']('dropdown-collapse'), 0 < n.offset().top ? n.removeClass('navbar-dark') : n.addClass('navbar-dark'), o.removeClass('navbar-dark');
        }), jQuery('#navbar-toggler-btn').on('click', function () {
            jQuery('.animated-icon').toggleClass('open'), jQuery('#navbar').toggleClass('navbar-col-show');
        });
    },
    registerParallaxEvent: function () {
        var r = jQuery('#banner[parallax="true"]');
        if (0 !== r.length) {
            var e = jQuery('#board');
            0 !== e.length && Fluid.utils.listenScroll(function () {
                var n = jQuery(window).scrollTop() / 5, o = 96 + parseInt(e.css('margin-top'), 0);
                o < n && (n = o), r.css({
                    transform: 'translate3d(0,' + n + 'px,0)',
                    '-webkit-transform': 'translate3d(0,' + n + 'px,0)',
                    '-ms-transform': 'translate3d(0,' + n + 'px,0)',
                    '-o-transform': 'translate3d(0,' + n + 'px,0)'
                }), jQuery('#toc') && jQuery('#toc-ctn').css({ 'padding-top': n + 'px' });
            });
        }
    },
    registerScrollDownArrowEvent: function () {
        var n = jQuery('.scroll-down-bar');
        0 !== n.length && n.on('click', function () {
            Fluid.utils.scrollToElement('#board', -jQuery('#navbar').height());
        });
    },
    registerScrollTopArrowEvent: function () {
        var r = jQuery('#scroll-top-button');
        if (0 !== r.length) {
            var e = jQuery('#board');
            if (0 !== e.length) {
                var t = !1, a = !1, n = function () {
                        var n = e[0].getClientRects()[0].right, o = document.body.offsetWidth - n;
                        t = 50 <= o, r.css({
                            bottom: t && a ? '20px' : '-60px',
                            right: o - 64 + 'px'
                        });
                    };
                n(), jQuery(window).resize(n);
                var o = e.offset().top;
                Fluid.utils.listenScroll(function () {
                    var n = document.body.scrollTop + document.documentElement.scrollTop;
                    a = o <= n, r.css({ bottom: t && a ? '20px' : '-60px' });
                }), r.on('click', function () {
                    jQuery('body,html').animate({
                        scrollTop: 0,
                        easing: 'swing'
                    });
                });
            }
        }
    },
    registerImageLoadedEvent: function () {
        if ('NProgress' in window) {
            var n = document.getElementById('banner');
            if (n) {
                var o = n.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/(['"])/g, ''), r = new Image();
                r.onload = function () {
                    window.NProgress && window.NProgress.inc(0.2);
                }, r.src = o, r.complete && r.onload();
            }
            var e = jQuery('main img:not([lazyload])'), t = e.length, a = !0, l = !1, s = void 0;
            try {
                for (var i, d = function () {
                            var n = i.value, o = n.onload;
                            n.onload = function () {
                                o && o(), window.NProgress && window.NProgress.inc(0.5 / t);
                            }, n.complete && n.onload();
                        }, c = e[Symbol.iterator](); !(a = (i = c.next()).done); a = !0)
                    d();
            } catch (n) {
                l = !0, s = n;
            } finally {
                try {
                    !a && c.return && c.return();
                } finally {
                    if (l)
                        throw s;
                }
            }
        }
    },
    billboard: function () {
        'console' in window && console.log('\n------------------------------------------------\n|                                              |\n|     ________  __            _        __      |\n|    |_   __  |[  |          (_)      |  ]     |\n|      | |_ \\_| | | __   _   __   .--.| |      |\n|      |  _|    | |[  | | | [  |/ /\'`\\\' |      |\n|     _| |_     | | | \\_/ |, | || \\__/  |      |\n|    |_____|   [___]\'.__.\'_/[___]\'.__.;__]     |\n|                                              |\n|           Powered by Hexo x Fluid            |\n|         GitHub: https://git.io/JqpVD         |\n|                                              |\n------------------------------------------------\n    ');
    }
};