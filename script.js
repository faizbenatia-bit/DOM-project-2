document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeButton = document.getElementById("change-color-btn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  changeButton.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
    //colorBox.style.backgroundColor = getRandomRGBColor();

  });
});
