'use strict';
HTMLElement.prototype.wrap = function (t) {
    this.parentNode.insertBefore(t, this), this.parentNode.removeChild(this), t.appendChild(this);
}, Fluid.plugins = {
    typing: function (t) {
        if ('Typed' in window) {
            var e = new window.Typed('#subtitle', {
                strings: ["  ",t+"&nbsp;"],
                cursorChar: CONFIG.typing.cursorChar,
                typeSpeed: CONFIG.typing.typeSpeed,
                loop: CONFIG.typing.loop
            });
            e.stop();
            var o = document.getElementById('subtitle');
            o && (o.innerText = ''), jQuery(document).ready(function () {
                jQuery('.typed-cursor').addClass('h2'), e.start();
            });
        }
    },
    initTocBot: function () {
        var t = jQuery('#toc');
        if (0 !== t.length && window.tocbot) {
            var e = jQuery('#board-ctn').offset().top;
            window.tocbot.init({
                tocSelector: '#toc-body',
                contentSelector: '.markdown-body',
                headingSelector: CONFIG.toc.headingSelector || 'h1,h2,h3,h4,h5,h6',
                linkClass: 'tocbot-link',
                activeLinkClass: 'tocbot-active-link',
                listClass: 'tocbot-list',
                isCollapsedClass: 'tocbot-is-collapsed',
                collapsibleClass: 'tocbot-is-collapsible',
                collapseDepth: CONFIG.toc.collapseDepth || 0,
                scrollSmooth: !0,
                headingsOffset: -e
            }), 0 < jQuery('.toc-list-item').length && t.css('visibility', 'visible');
        }
    },
    initFancyBox: function () {
        $.fancybox && (jQuery('.markdown-body :not(a) > img, .markdown-body > img').each(function () {
            var t = jQuery(this), e = t.attr('data-src') || t.attr('src') || '';
            if (CONFIG.image_zoom.img_url_replace) {
                var o = CONFIG.image_zoom.img_url_replace, n = o[0] || '', i = o[1] || '';
                if (n)
                    if (/^re:/.test(n)) {
                        n = n.replace(/^re:/, '');
                        var a = new RegExp(n, 'gi');
                        e = e.replace(a, i);
                    } else
                        e = e.replace(n, i);
            }
            var r = t.wrap('\n        <a class="fancybox fancybox.image" href="' + e + '"\n          itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent('a');
            t.is('.group-image-container img') ? r.attr('data-fancybox', 'group').attr('rel', 'group') : r.attr('data-fancybox', 'default').attr('rel', 'default');
            var c = t.attr('title') || t.attr('alt');
            c && (r.append('<p class="image-caption">' + c + '</p>'), r.attr('title', c).attr('data-caption', c));
        }), $.fancybox.defaults.hash = !1, jQuery('.fancybox').fancybox({
            loop: !0,
            helpers: { overlay: { locked: !1 } }
        }));
    },
    initAnchor: function () {
        if ('anchors' in window) {
            window.anchors.options = {
                placement: CONFIG.anchorjs.placement,
                visible: CONFIG.anchorjs.visible
            }, CONFIG.anchorjs.icon && (window.anchors.options.icon = CONFIG.anchorjs.icon);
            var t = (CONFIG.anchorjs.element || 'h1,h2,h3,h4,h5,h6').split(','), e = [], o = !0, n = !1, i = void 0;
            try {
                for (var a, r = t[Symbol.iterator](); !(o = (a = r.next()).done); o = !0) {
                    var c = a.value;
                    e.push('.markdown-body > ' + c);
                }
            } catch (t) {
                n = !0, i = t;
            } finally {
                try {
                    !o && r.return && r.return();
                } finally {
                    if (n)
                        throw i;
                }
            }
            window.anchors.add(e.join(', '));
        }
    },
    initCopyCode: function () {
        if ('ClipboardJS' in window) {
            '</button>';
            var t = jQuery('.markdown-body pre');
            t.each(function () {
                var t = jQuery(this);
                0 < t.find('code.mermaid').length || 0 < t.find('span.line').length || t.append('<button class="copy-btn" data-clipboard-snippet=""><i class="iconfont icon-copy"></i><span>Copy</span></button>');
            });
            var e = new window.ClipboardJS('.copy-btn', {
                target: function (t) {
                    return t.previousElementSibling;
                }
            });
            jQuery('.copy-btn').addClass(function (t) {
                if (0 === t.length)
                    return 'copy-btn-dark';
                var e = t.css('background-color').replace(/rgba*\(/, '').replace(')', '').split(',');
                return 127.5 < 0.213 * e[0] + 0.715 * e[1] + 0.072 * e[2] ? 'copy-btn-dark' : 'copy-btn-light';
            }(t)), e.on('success', function (t) {
                t.clearSelection();
                var e = t.trigger.outerHTML;
                t.trigger.innerHTML = 'Success', setTimeout(function () {
                    t.trigger.outerHTML = e;
                }, 2000);
            });
        }
    }
};