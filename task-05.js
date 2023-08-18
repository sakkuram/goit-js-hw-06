// Отримуємо вхідні та вихідні елементи з DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Функція обробки вхідної події та оновлення виведення
function updateNameOutput() {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}

// Додаємо слухач вхідних подій до вхідного елемента
nameInput.addEventListener('input', updateNameOutput);