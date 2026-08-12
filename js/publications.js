document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('[data-topic-filter]');
  var cards = document.querySelectorAll('[data-publication-topic]');
  var sections = document.querySelectorAll('.pub-year-section');
  var status = document.querySelector('.pub-filter-status');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var selectedTopic = button.getAttribute('data-topic-filter');
      var visibleCount = 0;

      buttons.forEach(function (item) {
        var active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      cards.forEach(function (card) {
        var visible = selectedTopic === 'all' || card.getAttribute('data-publication-topic') === selectedTopic;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      sections.forEach(function (section) {
        section.hidden = !section.querySelector('[data-publication-topic]:not([hidden])');
      });

      status.textContent = selectedTopic === 'all'
        ? 'Showing all ' + visibleCount + ' publications.'
        : 'Showing ' + visibleCount + ' publications in ' + button.textContent + '.';
    });
  });
});
