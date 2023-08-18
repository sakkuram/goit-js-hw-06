const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

    // Отримуємо елемент галереї (ul.gallery)
    const galleryList = document.querySelector(".gallery");

    // Створення змінної для зберігання розмітки HTML
    let galleryMarkup = "";

    // Переглядаємо кожен об’єкт зображення в масиві зображень і створюємо розмітку HTML
    images.forEach((image) => {
      const { url, alt } = image;
      galleryMarkup += `
        <li class="gallery-item">
          <img src="${url}" alt="${alt}">
        </li>
      `;
    });

    // Вставляємо всю розмітку галереї в DOM за одну операцію
    galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
