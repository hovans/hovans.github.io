'use strict';
!function (p, h) {
    function d(c, l) {
        return new Promise(function (i, a) {
            c('get', '/classes/Counter?where=' + encodeURIComponent(JSON.stringify({ target: l }))).then(function (e) {
                return e.json();
            }).then(function (e) {
                var t = e.results, n = e.code, o = e.error;
                if (401 === n)
                    throw o;
                if (t && 0 < t.length) {
                    var r = t[0];
                    i(r);
                } else
                    c('post', '/classes/Counter', {
                        target: l,
                        time: 0
                    }).then(function (e) {
                        return e.json();
                    }).then(function (e, t) {
                        if (t)
                            throw t;
                        i(e);
                    }).catch(function (e) {
                        console.error('Failed to create', e), a(e);
                    });
            }).catch(function (e) {
                console.error('LeanCloud Counter Error:', e), a(e);
            });
        });
    }
    function f(e) {
        return {
            method: 'PUT',
            path: '/1.1/classes/Counter/' + e,
            body: {
                time: {
                    __op: 'Increment',
                    amount: 1
                }
            }
        };
    }
    var r = CONFIG.web_analytics.leancloud.app_id, i = CONFIG.web_analytics.leancloud.app_key, e = CONFIG.web_analytics.leancloud.server_url;
    function t(o) {
        !function (t) {
            var i = !0 === CONFIG.web_analytics.enable, e = [], a = [], n = h.querySelector('#leancloud-site-pv-container');
            if (n) {
                var o = d(t, 'site-pv').then(function (e) {
                    i && a.push(f(e.objectId));
                    var t = h.querySelector('#leancloud-site-pv');
                    t && (t.innerText = e.time + 1, n && (n.style.display = 'inline'));
                });
                e.push(o);
            }
            var c = h.querySelector('#leancloud-site-uv-container');
            if (c) {
                var r = d(t, 'site-uv').then(function (e) {
                    var t, n, o = (t = 'LeanCloud_UV_Flag', !((n = localStorage.getItem(t)) && new Date().getTime() - parseInt(n, 10) <= 86400000 || (localStorage.setItem(t, new Date().getTime().toString()), 0)));
                    o && i && a.push(f(e.objectId));
                    var r = h.querySelector('#leancloud-site-uv');
                    r && (r.innerText = e.time + (o ? 1 : 0), c && (c.style.display = 'inline'));
                });
                e.push(r);
            }
            var l = h.querySelector('#leancloud-page-views-container');
            if (l) {
                var s = decodeURI(p.location.pathname.replace(/(?<!\/)\/*(index.html)*$/, '/')), u = d(t, s).then(function (e) {
                        if (i && a.push(f(e.objectId)), l) {
                            var t = h.querySelector('#leancloud-page-views');
                            t && (t.innerText = (e.time || 0) + 1, l.style.display = 'inline');
                        }
                    });
                e.push(u);
            }
            i && Promise.all(e).then(function () {
                var e, o;
                0 < a.length && (e = t, o = a, new Promise(function (t, n) {
                    e('post', '/batch', { requests: o }).then(function (e) {
                        if ((e = e.json()).error)
                            throw e.error;
                        t(e);
                    }).catch(function (e) {
                        console.error('Failed to save visitor count', e), n(e);
                    });
                }));
            });
        }(function (e, t, n) {
            return fetch(o + '/1.1' + t, {
                method: e,
                headers: {
                    'X-LC-Id': r,
                    'X-LC-Key': i,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(n)
            });
        });
    }
    var n = '-MdYXbMMI' !== r.slice(-9) ? e : 'https://' + r.slice(0, 8).toLowerCase() + '.api.lncldglobal.com';
    n ? t(n) : fetch('https://app-router.leancloud.cn/2/route?appId=' + r).then(function (e) {
        return e.json();
    }).then(function (e) {
        e.api_server && t('https://' + e.api_server);
    });
}(window, document);