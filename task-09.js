function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 // Отримуємо елементів кнопки та span з DOM
 const changeColorButton = document.querySelector('.change-color');
 const colorSpan = document.querySelector('.color');

 // Функція обробки натискання кнопки та зміни кольору фону
 function changeBackgroundColor() {
   const randomColor = getRandomHexColor();
   document.body.style.backgroundColor = randomColor;
   colorSpan.textContent = randomColor;
 }

 // Додаємо прослуховувача події кліку до кнопки
 changeColorButton.addEventListener('click', changeBackgroundColor);