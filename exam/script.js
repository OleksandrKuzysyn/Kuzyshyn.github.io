const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const output = document.getElementById('text');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedLanguages = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    output.textContent = selectedLanguages.join(', ');
  });
});
