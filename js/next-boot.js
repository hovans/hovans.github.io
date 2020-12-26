'use strict';
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++)
            i[t] = e[t];
        return i;
    }
    return Array.from(e);
}
NexT.boot = {}, NexT.boot.registerEvents = function () {
    NexT.utils.registerScrollPercent(), NexT.utils.registerCanIUseTag(), document.querySelector('.site-nav-toggle .toggle').addEventListener('click', function () {
        event.currentTarget.classList.toggle('toggle-close');
        var e = document.querySelector('.site-nav'), t = e.classList.contains('site-nav-on') ? 'slideUp' : 'slideDown';
        'function' == typeof Velocity ? Velocity(e, t, {
            duration: 200,
            complete: function () {
                e.classList.toggle('site-nav-on');
            }
        }) : e.classList.toggle('site-nav-on');
    });
    document.querySelectorAll('.sidebar-nav li').forEach(function (e, s) {
        e.addEventListener('click', function (e) {
            var t = e.currentTarget, i = 'sidebar-nav-active', o = 'sidebar-panel-active';
            if (!t.classList.contains(i)) {
                var n = document.querySelectorAll('.sidebar-panel'), a = n[s], r = n[1 - s];
                window.anime({
                    targets: r,
                    duration: 200,
                    easing: 'linear',
                    opacity: 0,
                    complete: function () {
                        r.classList.remove(o), a.style.opacity = 0, a.classList.add(o), window.anime({
                            targets: a,
                            duration: 200,
                            easing: 'linear',
                            opacity: 1
                        });
                    }
                }), [].concat(_toConsumableArray(t.parentNode.children)).forEach(function (e) {
                    e.classList.remove(i);
                }), t.classList.add(i);
            }
        });
    }), window.addEventListener('resize', NexT.utils.initSidebarDimension), window.addEventListener('hashchange', function () {
        var e = location.hash;
        if ('' !== e && !e.match(/%\S{2}/)) {
            var t = document.querySelector('.tabs ul.nav-tabs li a[href="' + e + '"]');
            t && t.click();
        }
    });
}, NexT.boot.refresh = function () {
    CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox(), CONFIG.mediumzoom && window.mediumZoom('.post-body :not(a) > img, .post-body > img'), CONFIG.lazyload && window.lozad('.post-body img').observe(), CONFIG.pangu && window.pangu.spacingPage(), CONFIG.exturl && NexT.utils.registerExtURL(), CONFIG.copycode.enable && NexT.utils.registerCopyCode(), NexT.utils.registerTabsTag(), NexT.utils.registerActiveMenuItem(), NexT.utils.registerSidebarTOC(), NexT.utils.wrapTableWithBox(), NexT.utils.registerVideoIframe();
}, NexT.boot.motion = function () {
    CONFIG.motion.enable && NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap(), NexT.utils.updateSidebarPosition();
}, window.addEventListener('DOMContentLoaded', function () {
    NexT.boot.registerEvents(), NexT.boot.refresh(), NexT.boot.motion();
});