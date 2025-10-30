document.addEventListener('DOMContentLoaded', function () {
  const modeButtons = document.querySelectorAll('.mode-btn');
  const calculatorModes = document.querySelectorAll('.calculator-mode');
  const slider = document.querySelector('.mode-slider');

  // Initialize slider position on load
  const activeButton = document.querySelector('.mode-btn.active');
  if (activeButton) moveSlider(activeButton);

  modeButtons.forEach(button => {
    button.addEventListener('click', function () {
      modeButtons.forEach(btn => btn.classList.remove('active'));
      calculatorModes.forEach(mode => mode.classList.remove('active'));

      this.classList.add('active');
      const mode = this.getAttribute('data-mode');
      document.getElementById(`${mode}-mode`).classList.add('active');
      document.querySelector('.display').textContent = '0';

      moveSlider(this);
    });
  });

  function moveSlider(button) {
    const rect = button.getBoundingClientRect();
    const containerRect = button.parentElement.getBoundingClientRect();

    slider.style.width = `${rect.width}px`;
    slider.style.left = `${rect.left - containerRect.left}px`;
  }
});
