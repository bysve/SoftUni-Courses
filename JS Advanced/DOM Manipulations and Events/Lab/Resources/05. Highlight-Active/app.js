function focused() {

    const inputArray = Array.from(document.querySelectorAll('input'));

    for (const input of inputArray) {

        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList = 'focused';
        })

        input.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused');
        })
    }

}