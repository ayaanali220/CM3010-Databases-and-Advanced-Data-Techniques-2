<%#
  index.ejs — Home / Hero page
  CM3010 Database Coursework
  Author: Written personally by Ayaan
%>
<%- include('partials/header') %>

<!-- ── Hero Section ──────────────────────────────────────────── -->
<section class="hero" aria-labelledby="hero-headline">
  <div class="hero__bg-glow" aria-hidden="true"></div>
  <div class="container hero__content">
    <p class="hero__eyebrow label-caps">CM3010 Database Coursework</p>
    <h1 id="hero-headline" class="hero__title">
      <span class="gold-text">IMDb</span> Explorer
    </h1>
    <p class="hero__subtitle">
      Exploring <strong class="gold-text">80,000+</strong> movies from 2000&ndash;2023 using
      MySQL &amp; Node.js
    </p>
    <div class="hero__ctas">
      <a href="/genres" class="btn btn--primary" id="cta-start-exploring">Start Exploring</a>
      <a href="/about"  class="btn btn--ghost"   id="cta-about-dataset">About Dataset</a>
    </div>
  </div>
</section>

<!-- ── Quick Stats ────────────────────────────────────────────── -->
<section class="stats-section" aria-label="Database statistics">
  <div class="container">
    <div class="stats-grid" role="list">

      <article class="stat-card" role="listitem" aria-label="Total titles in database">
        <div class="stat-card__icon" aria-hidden="true">🎬</div>
        <p class="stat-card__number"><%= titleCount %></p>
        <p class="stat-card__label">Total Titles</p>
      </article>

      <article class="stat-card stat-card--violet" role="listitem" aria-label="People in database">
        <div class="stat-card__icon" aria-hidden="true">🎭</div>
        <p class="stat-card__number"><%= personCount %></p>
        <p class="stat-card__label">People in Database</p>
      </article>

      <article class="stat-card" role="listitem" aria-label="Rated movies">
        <div class="stat-card__icon" aria-hidden="true">⭐</div>
        <p class="stat-card__number"><%= ratingCount %></p>
        <p class="stat-card__label">Rated Movies</p>
      </article>

    </div>
  </div>
</section>

<!-- ── Research Questions Grid ───────────────────────────────── -->
<section class="rq-section" aria-labelledby="rq-heading">
  <div class="container">
    <h2 id="rq-heading" class="section-title">Research Questions</h2>
    <p class="section-sub">Five analytical questions explored through SQL and interactive data tables.</p>

    <div class="rq-grid" role="list">

      <a href="/genres" class="rq-card" id="rq-card-1" role="listitem" aria-label="Research Question 1: Top Genres by Rating">
        <div class="rq-card__icon" aria-hidden="true">🏆</div>
        <p class="rq-card__tag label-caps">RQ 1</p>
        <h3 class="rq-card__title">Top Genres by Rating</h3>
        <p class="rq-card__desc">Which genres consistently earn the highest average IMDb ratings from viewers?</p>
        <span class="rq-card__arrow" aria-hidden="true">&#8594;</span>
      </a>

      <a href="/directors" class="rq-card" id="rq-card-2" role="listitem" aria-label="Research Question 2: Top Directors">
        <div class="rq-card__icon" aria-hidden="true">🎬</div>
        <p class="rq-card__tag label-caps">RQ 2</p>
        <h3 class="rq-card__title">Top Directors</h3>
        <p class="rq-card__desc">Who are the top 10 directors by average film rating across a minimum of 5 films?</p>
        <span class="rq-card__arrow" aria-hidden="true">&#8594;</span>
      </a>

      <a href="/trends" class="rq-card" id="rq-card-3" role="listitem" aria-label="Research Question 3: Rating Trends">
        <div class="rq-card__icon" aria-hidden="true">📈</div>
        <p class="rq-card__tag label-caps">RQ 3</p>
        <h3 class="rq-card__title">Rating Trends Over Time</h3>
        <p class="rq-card__desc">How has the average movie rating evolved year-by-year from 2000 to 2023?</p>
        <span class="rq-card__arrow" aria-hidden="true">&#8594;</span>
      </a>

      <a href="/duration" class="rq-card" id="rq-card-4" role="listitem" aria-label="Research Question 4: Runtime by Genre">
        <div class="rq-card__icon" aria-hidden="true">⏱️</div>
        <p class="rq-card__tag label-caps">RQ 4</p>
        <h3 class="rq-card__title">Runtime by Genre</h3>
        <p class="rq-card__desc">Which genres produce the longest movies on average? How does runtime vary?</p>
        <span class="rq-card__arrow" aria-hidden="true">&#8594;</span>
      </a>

      <a href="/versatile" class="rq-card" id="rq-card-5" role="listitem" aria-label="Research Question 5: Versatile Directors">
        <div class="rq-card__icon" aria-hidden="true">🎨</div>
        <p class="rq-card__tag label-caps">RQ 5</p>
        <h3 class="rq-card__title">Versatile Directors</h3>
        <p class="rq-card__desc">Which directors work across the greatest diversity of genres throughout their career?</p>
        <span class="rq-card__arrow" aria-hidden="true">&#8594;</span>
      </a>

    </div>
  </div>
</section>

<%- include('partials/footer') %>
