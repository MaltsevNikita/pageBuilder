document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const addSelectBtn = document.getElementById('addSelect');
  const clearAllBtn = document.getElementById('clearAll');
  const countBtn = document.getElementById('count');
  const total = document.getElementById('total')

  countBtn.addEventListener('click', () => {
    countTotal();
    console.log('hello');
  })

  addSelectBtn.addEventListener('click', addSelectBlock);
  clearAllBtn.addEventListener('click', clearAllBlocks);

  function addSelectBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    block.innerHTML = `
      <select class="selectType">
        <option value="type1" data-image-url="img/types/type1.jpg">Тип 1</option>
        <option value="type2" data-image-url="img/types/type2.jpg">Тип 2</option>
        <option value="type3" data-image-url="img/types/type3.jpg">Тип 3</option>
        <option value="type4" data-image-url="img/types/type4.jpg">Тип 4</option>
        <option value="type5" data-image-url="img/types/type5.jpg">Тип 5</option>
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

  function countTotal(){
    const selectItems = document.querySelectorAll('select');
    const selectValues = []; // Array to store the values

    selectItems.forEach(select => {
      selectValues.push(select.value); // Retrieve and store the value of each select element
    });

    selectValues.forEach(selectedItem => {
      console.log(selectedItem);
    })
    // console.log(selectValues[2]);
    // count.value = selectValues[2];

  }

  function clearAllBlocks() {
    document.querySelectorAll('.block').forEach(block => block.remove());
  }
});
