
// текст            type1
// текст + каринка  type2
// текст + галерея  type3
// текст + слайдер  type4
// текст + квиз     type5
// счётчик          type6
// тминиатюры       type7
// карта            type8

let prices = {
  type1:500,// текст 
  type2:2000,// текст + каринка
  type3:4000,// текст + галерея
  type4:2000,// текст + слайдер
  type5:2100,//список с маркерами
  type6:5000,// текст + квиз 
  type7:1000,// счётчик 
  type8:2000,// миниатюры 
  type9:3000,// карта 


}
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const addSelectBtn = document.getElementById('addSelect');
  const clearAllBtn = document.getElementById('clearAll');
  const countBtn = document.getElementById('count');
  // let totalBlock = document.getElementById('total')

  countBtn.addEventListener('click', () => {
    countTotal();
    // console.log('hello');
  })

  addSelectBtn.addEventListener('click', addSelectBlock);
  clearAllBtn.addEventListener('click', clearAllBlocks);

  function addSelectBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    block.innerHTML = `
      <select class="selectType">
        <option value="type1" data-image-url="img/types/block_imgText.jpg">картинка + текст</option>
        <option value="type2" data-image-url="img/types/block_Galery.jpg">галлерея</option>
        <option value="type3" data-image-url="img/types/block_slider.jpg">слайдер</option>
        <option value="type4" data-image-url="img/types/block_Toggle.jpg">список с маркерами</option>
        <option value="type5" data-image-url="img/types/block_Quiz.jpg">квиз</option>
        <option value="type6" data-image-url="img/types/block_Counter.jpg">счётчик</option>
        <option value="type7" data-image-url="img/types/block_Posts.jpg">секция с миниатюрами постов</option>
        <option value="type8" data-image-url="img/types/block_Video.jpg">видео</option>
        <option value="type9" data-image-url="img/types/block_Maps.jpg">карта</option>
      </select>
      <button class="removeSelect btn btn-danger">-</button>
      <button class="moveUp btn btn-dark">↑</button>
      <button class="moveDown btn btn-dark">↓</button>
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

    let total = 0;

    selectValues.forEach(selectedItem => {
      total += prices[selectedItem];
      

    })

    console.log(total);
    document.getElementById('total').innerHTML ='~' + total + ' руб.';
  }

  function clearAllBlocks() {
    document.querySelectorAll('.block').forEach(block => block.remove());
  }
});
