'use strict';
!function (t, e) {
    var r = !0, l = !1, o = void 0;
    try {
        for (var i, a = function () {
                    var t = i.value;
                    Fluid.utils.waitElementVisible(t, function () {
                        t.removeAttribute('srcset'), t.removeAttribute('lazyload');
                    }, CONFIG.lazyload.offset_factor);
                }, n = e.querySelectorAll('img[lazyload]')[Symbol.iterator](); !(r = (i = n.next()).done); r = !0)
            a();
    } catch (t) {
        l = !0, o = t;
    } finally {
        try {
            !r && n.return && n.return();
        } finally {
            if (l)
                throw o;
        }
    }
}(window, document);