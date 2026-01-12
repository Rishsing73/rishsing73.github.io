---
layout: default
permalink: /blog/
title: blogs
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">

{% if site.blog_name or site.blog_description %}

<div class="header-bar">
  <h1>{{ site.blog_name }}</h1>
  <h2>{{ site.blog_description }}</h2>
</div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}

<div class="container featured-posts mb-5">
  {% assign is_even = featured_posts.size | modulo: 2 %}
  <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
    {% for post in featured_posts %}
    <div class="col mb-4">
      <a href="{{ post.external_url | default: post.url | relative_url }}" target="_blank">
        <div class="card hoverable">
          {% assign thumb = post.image | default: post.thumbnail %}
          {% if thumb %}
            <img src="{{ thumb | relative_url }}" class="card-img-top" alt="{{ post.title }}">
          {% endif %}
          <div class="card-body">
            <div class="float-right"><i class="fa-solid fa-thumbtack fa-xs"></i></div>
            <h3 class="card-title text-lowercase">{{ post.title }}</h3>
            <p class="card-text">{{ post.excerpt }}</p>
            <p class="post-meta">
              {{ post.reading_note }}
              &nbsp; &middot; &nbsp;
              <i class="fa-solid fa-calendar fa-sm"></i> {{ post.date | date: "%B %d, %Y" }}
            </p>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>
{% endif %}

<ul class="post-list">
  {% assign postlist = paginator.posts %}
  {% for post in postlist %}
    {% assign thumbnail = post.thumbnail | default: post.image %}
    {% assign external = post.external_url | default: post.redirect %}

    <li>
      {% if thumbnail %}
      <div class="row align-items-start">
        <div class="col-sm-9">
      {% endif %}

      <h3>
        {% if external %}
          <a class="post-title" href="{{ external }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>

      <p>{{ post.excerpt }}</p>

      <p class="post-meta">
        {{ post.reading_note }}
        &nbsp; &middot; &nbsp;
        <i class="fa-solid fa-calendar fa-sm"></i> {{ post.date | date: '%B %d, %Y' }}
      </p>

      <p class="post-tags">
        {% for tag in post.tags %}
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
        {% endfor %}
      </p>

      {% if thumbnail %}
        </div>
        <div class="col-sm-3">
          <img class="card-img" src="{{ thumbnail | relative_url }}" style="object-fit: cover; height: 140px; width: 100%; border-radius: 8px;" alt="image preview for {{ post.title }}">
        </div>
      </div>
      {% endif %}
    </li>

{% endfor %}

</ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
