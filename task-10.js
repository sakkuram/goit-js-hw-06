function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція створення ящиків на основі вказаної суми
function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');

  // Очищаємо вміст div перед додаванням нових елементів
  boxesDiv.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesDiv.appendChild(box);
    size += 10;
  }
}

// Функція знищення всіх ящиків
function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';
}

// Отримуємо кнопок створення та знищення з DOM
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

// Додаємо прослуховувачів подій кліку до кнопок
createButton.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);