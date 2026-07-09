<%#
  trends.ejs — RQ3: Average Rating Over Time (2000-2023)
  CM3010 Database Coursework
  Author: Written personally by Ayaan
%>
<%- include('partials/header') %>

<section class="page-hero page-hero--teal">
  <div class="container">
    <p class="label-caps page-hero__tag">Research Question 3</p>
    <h1 class="page-hero__title">Rating Trends Over Time</h1>
    <p class="page-hero__desc">How has the average movie rating evolved year-by-year from 2000 to 2023?</p>
  </div>
</section>

<section class="content-section">
  <div class="container">

    <% if (rows.length > 0) { %>
    <!-- Line chart -->
    <div class="chart-wrap chart-wrap--tall" aria-label="Line chart of average movie ratings by year">
      <canvas id="trendsChart" role="img" aria-label="Line chart showing average IMDb rating per year from 2000 to 2023"></canvas>
    </div>

    <!-- Data table -->
    <div class="table-wrap">
      <table class="data-table" aria-label="Average movie ratings by year">
        <caption class="sr-only">Average IMDb movie rating per year from 2000 to 2023</caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Avg Rating</th>
            <th scope="col">Total Movies</th>
            <th scope="col">Avg Votes</th>
          </tr>
        </thead>
        <tbody>
          <% rows.forEach(row => { %>
          <tr>
            <td><strong><%= row.release_year %></strong></td>
            <td><span class="rating-badge rating-badge--<%= row.avg_rating >= 7 ? 'gold' : 'green' %>">⭐ <%= row.avg_rating %></span></td>
            <td><%= Number(row.total_movies).toLocaleString() %></td>
            <td><%= Number(row.avg_votes).toLocaleString() %></td>
          </tr>
          <% }) %>
        </tbody>
      </table>
    </div>

    <script>
      // Chart.js line chart for rating trends
      // Source: Chart.js library (https://www.chartjs.org/) — not written by Ayaan
      const labels      = <%- chartLabels %>;
      const ratingData  = <%- chartRating %>;
      const moviesData  = <%- chartMovies %>;

      new Chart(document.getElementById('trendsChart'), {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Avg Rating',
              data: ratingData,
              borderColor: '#f5c518',
              backgroundColor: 'rgba(245,197,24,0.1)',
              borderWidth: 3,
              pointBackgroundColor: '#f5c518',
              pointRadius: 5,
              tension: 0.3,
              yAxisID: 'y',
            },
            {
              label: 'Total Movies',
              data: moviesData,
              borderColor: '#8b5cf6',
              backgroundColor: 'rgba(139,92,246,0.08)',
              borderWidth: 2,
              borderDash: [6, 3],
              pointBackgroundColor: '#8b5cf6',
              pointRadius: 3,
              tension: 0.3,
              yAxisID: 'y1',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: {
              labels: { color: '#e3e0f1', font: { family: 'Inter' } }
            }
          },
          scales: {
            y: {
              type: 'linear', position: 'left',
              min: 5.5, max: 8,
              title: { display: true, text: 'Avg Rating', color: '#f5c518' },
              grid: { color: 'rgba(255,255,255,0.07)' },
              ticks: { color: '#f5c518' }
            },
            y1: {
              type: 'linear', position: 'right',
              title: { display: true, text: 'Total Movies', color: '#8b5cf6' },
              grid: { drawOnChartArea: false },
              ticks: { color: '#8b5cf6' }
            },
            x: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: '#d1c5ac' }
            }
          }
        }
      });
    </script>

    <% } else { %>
    <div class="empty-state"><p>No trend data available.</p></div>
    <% } %>

  </div>
</section>

<%- include('partials/footer') %>
