const button = document.querySelector('.enter-button');

const change = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}


inputs.forEach((input) => input.addEventListener('input', change));