const page = document.querySelector("body");
page.style.background = "#4c566a";

const container = document.querySelector("div");

function createGrid(quantity) {
    if (quantity > 100) quantity = 100;
    if (quantity < 10) quantity = 10;
    for (let i = 0; i < quantity * quantity; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
        pixel.style.boxSizing = "border-box";
        pixel.style.border = "1px solid ##2e3440";
        pixel.style.background = "#88c0d0";
        pixel.addEventListener("mouseenter", function (e) {
            e.target.style.background = "#2e3440";
        });
        container.style.display = "grid";
        container.style.width = "500px";
        container.style.height = "500px";
        container.style.margin = "auto";
        container.style.paddingTop = "200px";
        container.style.gap = "1px";
        container.style.gridTemplateColumns = "repeat(" + quantity + ", auto)";
        container.style.gridTemplateRows = "repeat(" + quantity + ", auto)";
    }
}

let initialq = 20;
createGrid(initialq);

const buttonDiv = document.getElementById("buttonDiv")
const resetButton = document.createElement("button");
buttonDiv.appendChild(resetButton);
buttonDiv.style.display = "flex"
buttonDiv.style.justifyContent = "center";
buttonDiv.style.padding = "50px";
resetButton.textContent = "RESET";
resetButton.addEventListener("click", function (e) {
    let q = prompt("Write a value for X: X * X");
    if (q > 100) q == 100;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(q);
});
