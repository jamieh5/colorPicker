
const showRGB = document.querySelector(".rgb-number");

document.querySelector(".check").addEventListener("click", function() {
    const r = Math.trunc(Math.random() * 255);
    const g = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);
    
    const randomColor = `RGB(${r},${g},${b})`;
    console.log(randomColor);
    document.querySelector("body").style.backgroundColor = `${randomColor}`;

    showRGB.textContent = `${randomColor}`;
    showRGB.style.fontSize = "3rem";
    showRGB.style.width = "55rem";
});