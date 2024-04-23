document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const addSelectBtn = document.getElementById('addSelect');
  const clearAllBtn = document.getElementById('clearAll');

  addSelectBtn.addEventListener('click', addSelectBlock);
  clearAllBtn.addEventListener('click', clearAllBlocks);

  function addSelectBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    block.innerHTML = `
      <select class="selectType">
        <option value="type1" data-image-url="img/001.png">Тип 1</option>
        <option value="type2" data-image-url="img/001.png">Тип 2</option>
        <option value="type3" data-image-url="img/002.jpg">Тип 3</option>
      </select>
      <button class="removeSelect">-</button>
      <button class="moveUp">↑</button>
      <button class="moveDown">↓</button>
      <span class="tooltip">?
        <span class="tooltiptext"><img src="" alt="Изображение" /></span>
      </span>
    `;
    container.appendChild(block);

    const removeSelectBtn = block.querySelector('.removeSelect');
    removeSelectBtn.addEventListener('click', function() {
      block.remove();
    });

    const moveUpBtn = block.querySelector('.moveUp');
    moveUpBtn.addEventListener('click', function() {
      block.parentNode.insertBefore(block, block.previousElementSibling);
    });

    const moveDownBtn = block.querySelector('.moveDown');
    moveDownBtn.addEventListener('click', function() {
      if (block.nextElementSibling) {
        block.parentNode.insertBefore(block.nextElementSibling, block);
      }
    });

    const selectType = block.querySelector('.selectType');
    const tooltipImage = block.querySelector('.tooltiptext img');
    updateTooltipImage(selectType, tooltipImage);

    selectType.addEventListener('change', function() {
      updateTooltipImage(selectType, tooltipImage);
    });
  }

  function updateTooltipImage(selectElement, imageElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const imageUrl = selectedOption.getAttribute('data-image-url');
    imageElement.src = imageUrl;
  }

  function clearAllBlocks() {
    document.querySelectorAll('.block').forEach(block => block.remove());
  }
});
