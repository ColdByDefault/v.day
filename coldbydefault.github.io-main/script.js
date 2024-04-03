const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const message = document.getElementById('message');

noButton.addEventListener('click', () => {
  const currentFontSize = window.getComputedStyle(yesButton).fontSize;
  const currentFontSizeNum = parseFloat(currentFontSize);
  const newFontSize = currentFontSizeNum * 2.2; // Increasing font size by 20%

  yesButton.style.fontSize = `${newFontSize}px`;
});
yesBtn.addEventListener('click', function() {
    message.textContent = 'Come Over and tell me!';
  });