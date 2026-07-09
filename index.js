/**
 * main.js — Client-side JavaScript
 * CM3010 Database Coursework
 * Author: Written personally by Ayaan
 */

'use strict';

/* ── Mobile navigation toggle ───────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked on mobile
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Active nav link highlight ─────────────────────────────── */
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('nav-link--active');
    link.setAttribute('aria-current', 'page');
  }
});

/* ── Intersection Observer: card entrance animation ─────────── */
const observerOptions = {
  root:      null,
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.rq-card, .stat-card, .director-card, .versatile-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
