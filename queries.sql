<%#
  error.ejs — Error page (404/500)
  CM3010 Database Coursework
  Author: Written personally by Ayaan
%>
<%- include('partials/header') %>

<section class="error-page" aria-labelledby="error-heading">
  <div class="container error-page__inner">
    <div class="error-page__code" aria-hidden="true"><%= status %></div>
    <h1 id="error-heading" class="error-page__title"><%= title %></h1>
    <p class="error-page__message"><%= message %></p>
    <a href="/" class="btn btn--primary" id="btn-go-home">Go Home</a>
  </div>
</section>

<%- include('partials/footer') %>
