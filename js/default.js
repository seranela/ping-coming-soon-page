(() => {
  const emailInput = document.getElementById('email');
  const errorEmpty = document.getElementById('warning-empty');
  const errorInvalid = document.getElementById('warning-invalid');
  const submitButton = document.getElementById('submit-button');

  function checkInput() {
    if (emailInput.value.trim() === '') {
      errorEmpty.style.display = 'block';
      emailInput.classList.add('input-invalid');
    } else {
      errorEmpty.style.display = 'none';

      if (emailInput.validity.valid) {
        errorInvalid.style.display = 'none';
        emailInput.classList.remove('input-invalid');
      } else {
        errorInvalid.style.display = 'block';
        emailInput.classList.add('input-invalid');
      }
    }
  }

  // Check input as user is typing
  emailInput.addEventListener('input', checkInput, false);
  // Check inputs upon user submission
  submitButton.addEventListener('click', checkInput, false);
})();