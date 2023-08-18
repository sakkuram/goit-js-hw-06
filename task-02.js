const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримуємо список інгредієнтів (ul#ingredients)
 const ingredientsList = document.getElementById("ingredients");

 // Створюємо фрагмент документа для тимчасового зберігання елементів списку
 const fragment = document.createDocumentFragment();

// Перебираємо кожен елемент у масиві інгредієнтів
 ingredients.forEach((ingredient) => {
   // Створення нового елемента li
   const listItem = document.createElement("li");

   // Встановлюємо текстовий вміст елемента li на назву інгредієнта
   listItem.textContent = ingredient;

   // Додаємо клас "item" до елемента li
   listItem.classList.add("item");

   // Додаємо елемент li до фрагмента документа
   fragment.appendChild(listItem);
 });

 // Після того, як усі елементи li додано до фрагмента, вставляємо їх у список інгредієнтів однією операцією
 ingredientsList.appendChild(fragment);
