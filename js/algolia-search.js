'use strict';
window.addEventListener('DOMContentLoaded', function () {
    var t = CONFIG.algolia, e = instantsearch({
            appId: t.appID,
            apiKey: t.apiKey,
            indexName: t.indexName,
            searchFunction: function (e) {
                document.querySelector('#search-input input').value && e.search();
            }
        });
    window.pjax && e.on('render', function () {
        window.pjax.refresh(document.getElementById('algolia-hits'));
    }), [instantsearch.widgets.searchBox({container:"#search-input",placeholder:t.labels.input_placeholder}),instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(e){return t.labels.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)+'\n            <span class="algolia-powered">\n              <img src="'+CONFIG.root+'images/algolia_logo.svg" alt="Algolia">\n            </span>\n            <hr>'}}}),instantsearch.widgets.hits({container:"#algolia-hits",hitsPerPage:t.hits.per_page||10,templates:{item:function(e){return'<a href="'+(e.permalink?e.permalink:CONFIG.root+e.path)+'" class="algolia-hit-item-link">'+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="algolia-hits-empty">\n              '+t.labels.hits_empty.replace(/\$\{query}/,e.query)+"\n            </div>"}},cssClasses:{item:"algolia-hit-item"}}),instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirstLast:!1,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})].forEach(e.addWidget, e), e.start(), document.querySelector('.popup-trigger').addEventListener('click', function () {
        document.body.style.overflow = 'hidden', document.querySelector('.search-pop-overlay').style.display = 'block', document.querySelector('.popup').style.display = 'block', document.querySelector('#search-input input').focus();
    });
    function a() {
        document.body.style.overflow = '', document.querySelector('.search-pop-overlay').style.display = 'none', document.querySelector('.popup').style.display = 'none';
    }
    document.querySelector('.search-pop-overlay').addEventListener('click', a), document.querySelector('.popup-btn-close').addEventListener('click', a), window.addEventListener('pjax:success', a), window.addEventListener('keyup', function (e) {
        27 === e.which && a();
    });
});