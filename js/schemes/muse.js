'use strict';
window.addEventListener('DOMContentLoaded', function () {
    var n = 'right' === CONFIG.sidebar.position, e = CONFIG.sidebar.width || 320, d = {}, r = {}, i = {
            lines: document.querySelector('.sidebar-toggle'),
            init: function () {
                this.lines.classList.remove('toggle-arrow', 'toggle-close');
            },
            arrow: function () {
                this.lines.classList.remove('toggle-close'), this.lines.classList.add('toggle-arrow');
            },
            close: function () {
                this.lines.classList.remove('toggle-arrow'), this.lines.classList.add('toggle-close');
            }
        };
    function t() {
        var e = document.querySelector('.footer'), i = document.querySelector('.header').offsetHeight + document.querySelector('.main').offsetHeight + e.offsetHeight;
        e.classList.toggle('footer-fixed', i <= window.innerHeight);
    }
    ({
        sidebarEl: document.querySelector('.sidebar'),
        isSidebarVisible: !1,
        init: function () {
            i.init(), window.addEventListener('mousedown', this.mousedownHandler.bind(this)), window.addEventListener('mouseup', this.mouseupHandler.bind(this)), document.querySelector('#sidebar-dimmer').addEventListener('click', this.clickHandler.bind(this)), document.querySelector('.sidebar-toggle').addEventListener('click', this.clickHandler.bind(this)), document.querySelector('.sidebar-toggle').addEventListener('mouseenter', this.mouseEnterHandler.bind(this)), document.querySelector('.sidebar-toggle').addEventListener('mouseleave', this.mouseLeaveHandler.bind(this)), this.sidebarEl.addEventListener('touchstart', this.touchstartHandler.bind(this)), this.sidebarEl.addEventListener('touchend', this.touchendHandler.bind(this)), this.sidebarEl.addEventListener('touchmove', function (e) {
                return e.preventDefault();
            }), window.addEventListener('sidebar:show', this.showSidebar.bind(this)), window.addEventListener('sidebar:hide', this.hideSidebar.bind(this));
        },
        mousedownHandler: function (e) {
            d.X = e.pageX, d.Y = e.pageY;
        },
        mouseupHandler: function (e) {
            var i = e.pageX - d.X, t = e.pageY - d.Y, s = Math.sqrt(i * i + t * t) < 20 && e.target.matches('.main');
            this.isSidebarVisible && (s || e.target.matches('img.medium-zoom-image, .fancybox img')) && this.hideSidebar();
        },
        clickHandler: function () {
            this.isSidebarVisible ? this.hideSidebar() : this.showSidebar();
        },
        mouseEnterHandler: function () {
            this.isSidebarVisible || i.arrow();
        },
        mouseLeaveHandler: function () {
            this.isSidebarVisible || i.init();
        },
        touchstartHandler: function (e) {
            r.X = e.touches[0].clientX, r.Y = e.touches[0].clientY;
        },
        touchendHandler: function (e) {
            var i = e.changedTouches[0].clientX - r.X, t = e.changedTouches[0].clientY - r.Y, s = Math.abs(t) < 20 && (30 < i && n || i < -30 && !n);
            this.isSidebarVisible && s && this.hideSidebar();
        },
        showSidebar: function () {
            this.isSidebarVisible = !0, this.sidebarEl.classList.add('sidebar-active'), 'function' == typeof Velocity && Velocity(document.querySelectorAll('.sidebar .motion-element'), n ? 'transition.slideRightIn' : 'transition.slideLeftIn', {
                stagger: 50,
                drag: !0
            }), i.close(), NexT.utils.isDesktop() && window.anime(Object.assign({
                targets: document.body,
                duration: 400,
                easing: 'linear'
            }, n ? { 'padding-right': e } : { 'padding-left': e }));
        },
        hideSidebar: function () {
            this.isSidebarVisible = !1, this.sidebarEl.classList.remove('sidebar-active'), i.init(), NexT.utils.isDesktop() && window.anime(Object.assign({
                targets: document.body,
                duration: 400,
                easing: 'linear'
            }, n ? { 'padding-right': 0 } : { 'padding-left': 0 }));
        }
    }.init(), t(), window.addEventListener('resize', t), window.addEventListener('scroll', t));
});