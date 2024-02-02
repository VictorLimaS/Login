const inputs = document.querySelectorAll('.input');

const focusEvent = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('active');
}

const blurEvent = ({ target }) => {

    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('active');
    }

}

inputs.forEach((input) => {
    input.addEventListener('focus', focusEvent);
    input.addEventListener('blur', blurEvent);
});
