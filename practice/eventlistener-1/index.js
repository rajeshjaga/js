document.addEventListener('DOMContentLoaded', () => {

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => { box.style.backgroundColor = randomColor() })
    });
    function randomColor() {
        return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
})