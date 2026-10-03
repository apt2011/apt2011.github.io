const filters = document.querySelectorAll('[data-filter]');
const games = document.querySelectorAll('.game');
filters.forEach(button => button.addEventListener('click', () => {
  let count = 0;
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  games.forEach(game => { game.hidden = button.dataset.filter !== 'all' && game.dataset.genre !== button.dataset.filter; if (!game.hidden) count++; });
  document.querySelector('.result-count').textContent = `Показано ${count} из ${games.length} игр`;
}));
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
