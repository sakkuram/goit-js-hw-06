const validationInput = document.getElementById('validation-input');

// Функція для обробки події розмиття та перевірки довжини введення
function checkInputLength() {
  const expectedLength = parseInt(validationInput.dataset.length);
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === expectedLength;

  // Додавання або видалення класу CSS на основі дійсності вхідних даних
  if (isValid) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}

// Додаємо слухач подій розмиття до вхідного елемента
validationInput.addEventListener('blur', checkInputLength);