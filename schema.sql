<%#
  genres.ejs — RQ1: Top Genres by Average Rating
  CM3010 Database Coursework
  Author: Written personally by Ayaan
%>
<%- include('partials/header') %>

<section class="page-hero page-hero--gold">
  <div class="container">
    <p class="label-caps page-hero__tag">Research Question 1</p>
    <h1 class="page-hero__title">Top Genres by Rating</h1>
    <p class="page-hero__desc">Which genres consistently earn the highest average IMDb ratings?</p>
  </div>
</section>

<section class="content-section">
  <div class="container">

    <!-- Filter control -->
    <form class="filter-bar" method="GET" action="/genres" aria-label="Filter results">
      <label for="min-movies-genres" class="filter-bar__label">Minimum movies in genre:</label>
      <input type="number" id="min-movies-genres" name="min_movies"
             value="<%= minMovies %>" min="1" max="5000"
             class="filter-bar__input" />
      <button type="submit" class="btn btn--primary btn--sm" id="btn-filter-genres">Apply</button>
    </form>

    <!-- Chart -->
    <% if (rows.length > 0) { %>
    <div class="chart-wrap" aria-label="Bar chart of genres by average rating">
      <canvas id="genresChart" role="img" aria-label="Horizontal bar chart showing average rating per genre"></canvas>
    </div>

    <!-- Data table -->
    <div class="table-wrap">
      <table class="data-table" aria-label="Genres ranked by average rating">
        <caption class="sr-only">List of movie genres ranked by average IMDb rating</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Genre</th>
            <th scope="col">Avg Rating</th>
            <th scope="col">Total Movies</th>
            <th scope="col">Total Votes</th>
          </tr>
        </thead>
        <tbody>
          <% rows.forEach((row, i) => { %>
          <tr>
            <td class="rank-cell"><%= i + 1 %></td>
            <td><strong><%= row.genre %></strong></td>
            <td>
              <span class="rating-badge rating-badge--<%= row.avg_rating >= 7 ? 'gold' : row.avg_rating >= 6 ? 'green' : 'default' %>">
                ⭐ <%= row.avg_rating %>
              </span>
            </td>
            <td><%= Number(row.total_movies).toLocaleString() %></td>
            <td><%= Number(row.total_votes).toLocaleString() %></td>
          </tr>
          <% }) %>
        </tbody>
      </table>
    </div>

    <script>
      // Chart.js — Horizontal bar chart for genre ratings
      // Source: Chart.js library (https://www.chartjs.org/) — not written by Ayaan
      const labels = <%- JSON.stringify(rows.map(r => r.genre)) %>;
      const data   = <%- JSON.stringify(rows.map(r => parseFloat(r.avg_rating))) %>;
      new Chart(document.getElementById('genresChart'), {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Average Rating',
            data,
            backgroundColor: data.map(v =>
              v >= 7   ? 'rgba(245,197,24,0.75)' :
              v >= 6   ? 'rgba(139,92,246,0.65)' :
                         'rgba(255,255,255,0.25)'
            ),
            borderColor: data.map(v =>
              v >= 7   ? '#f5c518' :
              v >= 6   ? '#8b5cf6' :
                         'rgba(255,255,255,0.4)'
            ),
            borderWidth: 1,
            borderRadius: 6,
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` Avg Rating: ${ctx.parsed.x.toFixed(2)}`
              }
            }
          },
          scales: {
            x: {
              min: 0, max: 10,
              grid: { color: 'rgba(255,255,255,0.07)' },
              ticks: { color: '#d1c5ac' }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: '#e3e0f1', font: { size: 13 } }
            }
          }
        }
      });
    </script>

    <% } else { %>
    <div class="empty-state">
      <p>No genres found with &ge; <%= minMovies %> movies. Try a lower threshold.</p>
    </div>
    <% } %>

  </div>
</section>

<%- include('partials/footer') %>
