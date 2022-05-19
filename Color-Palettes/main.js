const red = document.getElementsByClassName('red')[0];
const green = document.getElementsByClassName('green')[0];
const blue = document.getElementsByClassName('blue')[0];
const yellow = document.getElementsByClassName('yellow')[0];


red.addEventListener('click', () => {
    let hexCode = document.getElementById("redColor");
    const colorCode = hexCode.textContent;
    navigator.clipboard.writeText(colorCode);
    
})

green.addEventListener('click', () => {
    let hexCode = document.getElementById("greenColor");
    const colorCode = hexCode.textContent;
    navigator.clipboard.writeText(colorCode);
    
})

blue.addEventListener('click', () => {
    let hexCode = document.getElementById("blueColor");
    const colorCode = hexCode.textContent;
    navigator.clipboard.writeText(colorCode);
    
})

yellow.addEventListener('click', () => {
    let hexCode = document.getElementById("yellowColor");
    const colorCode = hexCode.textContent;
    navigator.clipboard.writeText(colorCode);
    
})