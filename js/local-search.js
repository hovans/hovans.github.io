'use strict';
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n;
    }
    return Array.from(e);
}
window.addEventListener('DOMContentLoaded', function () {
    var n = !1, r = void 0, o = !0, e = CONFIG.path;
    0 === e.length ? e = 'search.xml' : /json$/i.test(e) && (o = !1);
    function T(e, t, n) {
        var r = e.length;
        if (0 === r)
            return [];
        var o = 0, a = [], i = [];
        for (n || (t = t.toLowerCase(), e = e.toLowerCase()); -1 < (a = t.indexOf(e, o));)
            i.push({
                position: a,
                word: e
            }), o = a + r;
        return i;
    }
    function E(e, t, n, r) {
        for (var o = n[n.length - 1], a = o.position, i = o.word, c = [], s = 0; a + i.length <= t && 0 !== n.length;) {
            i === r && s++, c.push({
                position: a,
                length: i.length
            });
            var l = a + i.length;
            for (n.pop(); 0 !== n.length && (a = (o = n[n.length - 1]).position, i = o.word, a < l);)
                n.pop();
        }
        return {
            hits: c,
            start: e,
            end: t,
            searchTextCount: s
        };
    }
    function q(n, e) {
        var r = '', o = e.start;
        return e.hits.forEach(function (e) {
            r += n.substring(o, e.position);
            var t = e.position + e.length;
            r += '<b class="search-keyword">' + n.substring(e.position, t) + '</b>', o = t;
        }), r += n.substring(o, e.end);
    }
    function t() {
        var x = c.value.trim().toLowerCase(), L = x.split(/[-\s]+/);
        1 < L.length && L.push(x);
        var S = [];
        if (0 < x.length && r.forEach(function (e) {
                if (e.title) {
                    var t = 0, n = e.title.trim(), r = n.toLowerCase(), o = e.content ? e.content.trim().replace(/<[^>]+>/g, '') : '';
                    CONFIG.localsearch.unescape && (o = String(o).replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&#x3A;/g, ':').replace(/&#(\d+);/g, function (e, t) {
                        return String.fromCharCode(t);
                    }).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
                    var a = o.toLowerCase(), i = decodeURIComponent(e.url).replace(/\/{2,}/g, '/'), c = [], s = [];
                    if (L.forEach(function (e) {
                            c = c.concat(T(e, r, !1)), s = s.concat(T(e, a, !1));
                        }), 0 < c.length || 0 < s.length) {
                        var l = c.length + s.length;
                        [c,s].forEach(function (e) {
                            e.sort(function (e, t) {
                                return t.position !== e.position ? t.position - e.position : e.word.length - t.word.length;
                            });
                        });
                        var u = [];
                        if (0 !== c.length) {
                            var h = E(0, n.length, c, x);
                            t += h.searchTextCountInSlice, u.push(h);
                        }
                        for (var d = []; 0 !== s.length;) {
                            var p = s[s.length - 1], f = p.position, g = p.word, y = f - 20, v = f + 80;
                            y < 0 && (y = 0), v < f + g.length && (v = f + g.length), v > o.length && (v = o.length);
                            var m = E(y, v, s, x);
                            t += m.searchTextCountInSlice, d.push(m);
                        }
                        d.sort(function (e, t) {
                            return e.searchTextCount !== t.searchTextCount ? t.searchTextCount - e.searchTextCount : e.hits.length !== t.hits.length ? t.hits.length - e.hits.length : e.start - t.start;
                        });
                        var C = parseInt(CONFIG.localsearch.top_n_per_article, 10);
                        0 <= C && (d = d.slice(0, C));
                        var w = '';
                        0 !== u.length ? w += '<li><a href="' + i + '" class="search-result-title">' + q(n, u[0]) + '</a>' : w += '<li><a href="' + i + '" class="search-result-title">' + n + '</a>', d.forEach(function (e) {
                            w += '<a href="' + i + '"><p class="search-result">' + q(o, e) + '...</p></a>';
                        }), w += '</li>', S.push({
                            item: w,
                            searchTextCount: t,
                            hitCount: l,
                            id: S.length
                        });
                    }
                }
            }), 1 === L.length && '' === L[0])
            s.innerHTML = '<div id="no-result"><i class="fa fa-search fa-5x"></i></div>';
        else if (0 === S.length)
            s.innerHTML = '<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>';
        else {
            S.sort(function (e, t) {
                return e.searchTextCount !== t.searchTextCount ? t.searchTextCount - e.searchTextCount : e.hitCount !== t.hitCount ? t.hitCount - e.hitCount : t.id - e.id;
            });
            var t = '<ul class="search-result-list">';
            S.forEach(function (e) {
                t += e.item;
            }), t += '</ul>', s.innerHTML = t, window.pjax && window.pjax.refresh(s);
        }
    }
    function a(t) {
        fetch(i).then(function (e) {
            return e.text();
        }).then(function (e) {
            n = !0, r = o ? [].concat(_toConsumableArray(new DOMParser().parseFromString(e, 'text/xml').querySelectorAll('entry'))).map(function (e) {
                return {
                    title: e.querySelector('title').innerHTML,
                    content: e.querySelector('content').innerHTML,
                    url: e.querySelector('url').innerHTML
                };
            }) : JSON.parse(e), document.querySelector('.search-pop-overlay').innerHTML = '', document.body.style.overflow = '', t && t();
        });
    }
    var i = CONFIG.root + e, c = document.getElementById('search-input'), s = document.getElementById('search-result');
    CONFIG.localsearch.preload && a();
    function l() {
        document.body.style.overflow = 'hidden', document.querySelector('.search-pop-overlay').style.display = 'block', document.querySelector('.popup').style.display = 'block', document.getElementById('search-input').focus();
    }
    'auto' === CONFIG.localsearch.trigger ? c.addEventListener('input', t) : (document.querySelector('.search-icon').addEventListener('click', t), c.addEventListener('keypress', function (e) {
        13 === e.keyCode && t();
    })), document.querySelector('.popup-trigger').addEventListener('click', function () {
        !1 === n ? (document.querySelector('.search-pop-overlay').style.display = '', document.querySelector('.search-pop-overlay').innerHTML = '<div class="search-loading-icon"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>', a(l)) : l();
    });
    function u() {
        document.body.style.overflow = '', document.querySelector('.search-pop-overlay').style.display = 'none', document.querySelector('.popup').style.display = 'none';
    }
    document.querySelector('.search-pop-overlay').addEventListener('click', u), document.querySelector('.popup-btn-close').addEventListener('click', u), window.addEventListener('pjax:success', u), window.addEventListener('keyup', function (e) {
        27 === e.which && u();
    });
});