'use strict';
!function (a, o) {
    var n = o.documentElement, r = 'Fluid_Color_Scheme', e = '--color-mode', i = 'data-user-color-scheme', c = 'data-default-color-scheme', u = 'color-toggle-btn', l = 'color-toggle-icon';
    function s(t) {
        try {
            return localStorage.getItem(t);
        } catch (t) {
            return null;
        }
    }
    function d() {
        var t = getComputedStyle(n).getPropertyValue(e);
        return 'string' == typeof t ? t.replace(/["'\s]/g, '') : null;
    }
    function f() {
        n.setAttribute(i, m()), function (t) {
            try {
                localStorage.removeItem(t);
            } catch (t) {
            }
        }(r);
    }
    var g = {
        dark: !0,
        light: !0
    };
    function m() {
        var t, e = 'string' == typeof (t = n.getAttribute(c)) ? t.replace(/["'\s]/g, '') : null;
        if (g[e])
            return e;
        if (e = d(), g[e])
            return e;
        var r = new Date().getHours();
        return 18 <= r || 0 <= r && r <= 6 ? 'dark' : 'light';
    }
    function h(t) {
        var e = t || s(r) || m();
        if (e === m())
            f();
        else {
            if (!g[e])
                return void f();
            n.setAttribute(i, e);
        }
        !function (e) {
            if (g[e]) {
                var r = 'icon-dark';
                e && (r = 'icon-' + v[e]);
                var t = o.getElementById(l);
                t ? (t.setAttribute('class', 'iconfont ' + r), t.setAttribute('data', v[e])) : Fluid.utils.waitElementLoaded(l, function () {
                    var t = o.getElementById(l);
                    t && (t.setAttribute('class', 'iconfont ' + r), t.setAttribute('data', v[e]));
                });
            }
        }(e), function (t) {
            a.REMARK42 && a.REMARK42.changeTheme(t);
            a.CUSDIS && a.CUSDIS.setTheme(t);
            var e = o.querySelector('iframe');
            if (e) {
                var r = a.UtterancesThemeLight;
                'dark' === t && (r = a.UtterancesThemeDark);
                var n = {
                    type: 'set-theme',
                    theme: r
                };
                e.contentWindow.postMessage(n, 'https://utteranc.es');
            }
        }(e);
    }
    var v = {
        dark: 'light',
        light: 'dark'
    };
    function y() {
        var t = s(r);
        if (g[t])
            t = v[t];
        else {
            if (null !== t)
                return;
            var e = o.getElementById(l);
            e && (t = e.getAttribute('data')), e && g[t] || (t = v[d()]);
        }
        return function (t, e) {
            try {
                localStorage.setItem(t, e);
            } catch (t) {
            }
        }(r, t), t;
    }
    h(), Fluid.utils.waitElementLoaded(u, function () {
        h();
        var t = o.getElementById(u);
        t && t.addEventListener('click', function () {
            h(y());
        });
    });
}(window, document);