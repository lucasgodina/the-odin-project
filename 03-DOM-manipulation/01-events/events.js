//onclick event
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

//Event listener

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    alert("Hello World");
});

button.addEventListener("click", function (e) {
    e.target.style.background = 'blue';
});
