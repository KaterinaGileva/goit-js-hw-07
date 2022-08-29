//Создай переменную counterValue в которой будет храниться текущее
//значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.
const spanRef = document.getElementById('value');
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);