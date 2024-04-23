document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addSelect');
  const form = document.getElementById('dynamicForm');
  const submitButton = document.getElementById('submitForm');

  let selectCounter = 0; // Счётчик для уникальных идентификаторов select

  addButton.addEventListener('click', function() {
    selectCounter++;
    const selectBlock = document.createElement('div');
    selectBlock.classList.add('select-block');
    selectBlock.innerHTML = `
      <select name="select-${selectCounter}">
        <option value="type1">Тип 1</option>
        <option value="type2">Тип 2</option>
        <option value="type3">Тип 3</option>
      </select>
      <span class="tooltip">Tooltip <img src="image-${selectCounter}.png" alt="Изображение ${selectCounter}"></span>
      <button type="button" class="move-up">Вверх</button>
      <button type="button" class="move-down">Вниз</button>
      <button type="button" class="delete">Удалить</button>
    `;

    // Добавление обработчиков для кнопок
    selectBlock.querySelector('.move-up').addEventListener('click', function() {
      if (selectBlock.previousElementSibling) {
        selectBlock.parentNode.insertBefore(selectBlock, selectBlock.previousElementSibling);
      }
    });

    selectBlock.querySelector('.move-down').addEventListener('click', function() {
      if (selectBlock.nextElementSibling) {
        selectBlock.parentNode.insertBefore(selectBlock.nextElementSibling, selectBlock);
      }
    });

    selectBlock.querySelector('.delete').addEventListener('click', function() {
      selectBlock.remove();
    });

    form.appendChild(selectBlock);
  });

  submitButton.addEventListener('click', function() {
    const selectedValues = Array.from(form.querySelectorAll('select')).map(select => select.value);
    console.log(selectedValues);
    // Здесь код для отправки данных
  });
});
