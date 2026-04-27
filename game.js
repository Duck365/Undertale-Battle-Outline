const buttons = document.querySelectorAll('.button');
const indicator = document.querySelector('.selected-indicator');
let selectedIndex = 0;

function updateSelection() {
  const button = buttons[selectedIndex];
  const rect = button.getBoundingClientRect();
  const container = document.querySelector('.action-menu').getBoundingClientRect();
  indicator.style.transform = `translate(${rect.x - container.x}px, ${rect.y - container.y}px)`;
}

updateSelection();

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    selectedIndex = (selectedIndex - 1 + buttons.length) % buttons.length;
  } else if (e.key === 'ArrowRight') {
    selectedIndex = (selectedIndex + 1) % buttons.length;
  }
  updateSelection();
});
