// Отримуємо list категорій (ul#categories)
const categoriesList = document.getElementById('categories');

// Отримуємо усі li.item елементи (categories)
const categories = categoriesList.querySelectorAll('.item');

// Рахуємо та виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимось по кожній категорії li.item і виводимо header текст з кількістю елементів
categories.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent.trim();
    const categoryElements = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
    console.log('');
  });