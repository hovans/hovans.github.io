'use strict';
!function () {
    var e = jQuery('#modalSearch'), t = '#local-search-input', r = '#local-search-result';
    e.on('show.bs.modal', function () {
        !function (e, t, r) {
            var l = jQuery(t), s = jQuery(r);
            if (0 === l.length)
                throw Error('No element selected by the searchSelector');
            if (0 === s.length)
                throw Error('No element selected by the resultSelector');
            -1 === s.attr('class').indexOf('list-group-item') && s.html('<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>'), $.ajax({
                url: e,
                dataType: 'xml',
                success: function (e) {
                    var t = jQuery('entry', e).map(function () {
                        return {
                            title: jQuery('title', this).text(),
                            content: jQuery('content', this).text(),
                            url: jQuery('url', this).text()
                        };
                    }).get();
                    -1 === s.html().indexOf('list-group-item') && s.html(''), l.on('input', function () {
                        var e = l.val(), m = '', v = e.trim().toLowerCase().split(/[\s-]+/);
                        return s.html(''), e.trim().length <= 0 ? l.removeClass('invalid').removeClass('valid') : (t.forEach(function (e) {
                            var r = !0;
                            e.title && '' !== e.title.trim() || (e.title = 'Untitled');
                            var t = e.title.trim(), l = t.toLowerCase(), s = e.content.trim().replace(/<[^>]+>/g, ''), a = s.toLowerCase(), i = e.url, n = -1, o = -1, c = -1;
                            if ('' !== a ? v.forEach(function (e, t) {
                                    n = l.indexOf(e), o = a.indexOf(e), n < 0 && o < 0 ? r = !1 : (o < 0 && (o = 0), 0 === t && (c = o));
                                }) : r = !1, r) {
                                m += '<a href=\'' + i + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + t + '</a>';
                                if (0 <= c) {
                                    var u = c - 20, h = c + 80;
                                    u < 0 && (u = 0), 0 === u && (h = 100), h > s.length && (h = s.length);
                                    var d = s.substring(u, h);
                                    v.forEach(function (e) {
                                        var t = new RegExp(e, 'gi');
                                        d = d.replace(t, '<span class="search-word">' + e + '</span>');
                                    }), m += '<p class=\'search-list-content\'>' + d + '...</p>';
                                }
                            }
                        }), -1 === m.indexOf('list-group-item') ? l.addClass('invalid').removeClass('valid') : (l.addClass('valid').removeClass('invalid'), void s.html(m)));
                    });
                }
            });
        }(CONFIG.search_path || '/local-search.xml', t, r);
    }), e.on('shown.bs.modal', function () {
        jQuery('#local-search-input').focus();
    }), e.on('hidden.bs.modal', function () {
        !function (e, t) {
            var r = jQuery(e), l = jQuery(t);
            if (0 === r.length)
                throw Error('No element selected by the searchSelector');
            if (0 === l.length)
                throw Error('No element selected by the resultSelector');
            r.val('').removeClass('invalid').removeClass('valid'), l.html('');
        }(t, r);
    });
}();