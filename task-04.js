let counterValue = 0;

    // Отримуємо елементи з DOM
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');
    const valueSpan = document.getElementById('value');

    // Функція для оновлення інтерфейсу новим значенням лічильника
    function updateCounterValue() {
      valueSpan.textContent = counterValue;
    }

    // Функція для обробки дії зменшення
    function decrementCounter() {
      counterValue -= 1;
      updateCounterValue();
    }

    // Функція для обробки дії збільшення
    function incrementCounter() {
      counterValue += 1;
      updateCounterValue();
    }

    // Додаваємо прослуховувачів подій кліку до кнопок
    decrementButton.addEventListener('click', decrementCounter);
    incrementButton.addEventListener('click', incrementCounter);

    // Оновлюємо початкове значення інтерфейсу
    updateCounterValue();