//<input
 //     type="text"
 //     id="validation-input"
 //     data-length="6"
 //     placeholder="Please enter 6 symbols"
 //   />
//Сколько символов должно быть в инпуте, указывается
//в его атрибуте data - length.
//Если введено подходящее количество символов, то border
//инпута становится зелёным, если неправильное - красным.
//Для добавления стилей, используй
//CSS - классы valid и invalid, которые
//мы уже добавили в исходные файлы задания.

const refs = {
  validationInput: document.querySelector('#validation-input'),
  }

const testValidation = (event) => {
  const onInput = event.currentTarget;
  const datasetLength = Number(onInput.dataset.length);
  
  if (onInput.value.length
    === datasetLength) {
    onInput.classList.add('valid'); 
  }
  else {
    onInput.classList.add('invalid');
  }
  if (onInput.value === "") {
   refs.validationInput.classList.remove('valid', 'invalid');
 }
};

refs.validationInput.addEventListener('blur', testValidation);
