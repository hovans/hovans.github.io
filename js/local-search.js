'use strict';
!function () {
    var e = jQuery('#modalSearch');
    e.on('show.bs.modal', function () {
        !function (e) {
            var r = jQuery('#local-search-input'), l = jQuery('#local-search-result');
            if (0 === r.length)
                throw Error('No element selected by the searchSelector');
            if (0 === l.length)
                throw Error('No element selected by the resultSelector');
            -1 === l.attr('class').indexOf('list-group-item') && l.html('<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>'), $.ajax({
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
                    -1 === l.html().indexOf('list-group-item') && l.html(''), r.on('input', function () {
                        var e = r.val(), m = '', v = e.trim().toLowerCase().split(/[\s-]+/);
                        return l.html(''), e.trim().length <= 0 ? r.removeClass('invalid').removeClass('valid') : (t.forEach(function (e) {
                            var r = !0;
                            e.title && '' !== e.title.trim() || (e.title = 'Untitled');
                            var t = e.title.trim(), l = t.toLowerCase(), a = e.content.trim().replace(/<[^>]+>/g, ''), s = a.toLowerCase(), i = e.url, n = -1, o = -1, c = -1;
                            if ('' !== s ? v.forEach(function (e, t) {
                                    n = l.indexOf(e), o = s.indexOf(e), n < 0 && o < 0 ? r = !1 : (o < 0 && (o = 0), 0 === t && (c = o));
                                }) : r = !1, r && (m += '<a href=\'' + i + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + t + '</a>', 0 <= c)) {
                                var u = c - 20, h = c + 80;
                                u < 0 && (u = 0), 0 === u && (h = 100), h > a.length && (h = a.length);
                                var d = a.substring(u, h);
                                v.forEach(function (e) {
                                    var t = new RegExp(e, 'gi');
                                    d = d.replace(t, '<span class="search-word">' + e + '</span>');
                                }), m += '<p class=\'search-list-content\'>' + d + '...</p>';
                            }
                        }), -1 === m.indexOf('list-group-item') ? r.addClass('invalid').removeClass('valid') : (r.addClass('valid').removeClass('invalid'), void l.html(m)));
                    });
                }
            });
        }(CONFIG.search_path || '/local-search.xml');
    }), e.on('shown.bs.modal', function () {
        jQuery('#local-search-input').focus();
    }), e.on('hidden.bs.modal', function () {
        !function () {
            var e = jQuery('#local-search-input'), t = jQuery('#local-search-result');
            if (0 === e.length)
                throw Error('No element selected by the searchSelector');
            if (0 === t.length)
                throw Error('No element selected by the resultSelector');
            e.val('').removeClass('invalid').removeClass('valid'), t.html('');
        }();
    });
}();