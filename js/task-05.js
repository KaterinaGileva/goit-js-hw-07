
//<input type="text" id="name-input" 
//placeholder = "Please enter your name" />
 //<h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const refs = {
    input: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output')
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        refs.nameSpan.textContent = "Anonymous";
    }
}