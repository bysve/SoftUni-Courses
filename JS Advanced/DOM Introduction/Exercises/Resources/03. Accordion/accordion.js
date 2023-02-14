function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const extraDiv = document.getElementById('extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extraDiv.style.display = 'block';
    } else if (button.textContent === 'Less'){
        button.textContent = 'More';
        extraDiv.style.display = 'none';
    }
}