 // Отримуємо елемент форми з DOM
 const loginForm = document.querySelector('.login-form');

 // Функція обробки подання форми
 function handleSubmit(event) {
   event.preventDefault(); // Запобігання перезавантаженню сторінки під час надсилання форми

   // Отримуємо вхідні елементи з форми
   const emailInput = loginForm.elements.email;
   const passwordInput = loginForm.elements.password;

   // Перевірка порожніх полів
   if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
     alert('Please fill in all fields.');
     return;
   }

   // Створюємо об'єкта для зберігання введених даних
   const formData = {
     email: emailInput.value,
     password: passwordInput.value,
   };

   // Виводимо об'єкт із введеними даними в консоль
   console.log(formData);

   // Очищаємо поля форми за допомогою методу reset
   loginForm.reset();
 }

 // Додаємо слухача подій надсилання до форми
 loginForm.addEventListener('submit', handleSubmit);
