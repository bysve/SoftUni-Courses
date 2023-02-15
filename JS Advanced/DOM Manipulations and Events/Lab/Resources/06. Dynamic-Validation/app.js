function validate() {
    const input = document.getElementById('email');
    const emailPattern = /^[\w]+@[\w]+\.[\w]+$/gm;

    input.addEventListener('change', () => {
        if (!input.value.match(emailPattern)) {
            input.classList = 'error';
        } else {
            input.classList.remove('error');
        }
    });
}