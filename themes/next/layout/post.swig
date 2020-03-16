{% extends '_layout.swig' %}
{% import '_macro/sidebar.swig' as sidebar_template with context %}

{% block title %}{{ page.title }} | {{ title }}{% endblock %}

{% block content %}

  <div class="posts-expand">
    {{ partial('_macro/post.swig', {post: page}) }}
  </div>

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(true) }}
{% endblock %}

<script>
(function(){
var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
</script>