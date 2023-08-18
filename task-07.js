 // Отримуємо вхідний елемент і елемент span з DOM
 const fontSizeControl = document.getElementById('font-size-control');
 const textSpan = document.getElementById('text');

 // Функція для обробки події введення та оновлення розміру шрифту
 function updateFontSize() {
   const fontSizeValue = fontSizeControl.value;
   textSpan.style.fontSize = `${fontSizeValue}px`;
 }

 // Додаємо слухач вхідних подій до вхідного елемента
 fontSizeControl.addEventListener('input', updateFontSize);