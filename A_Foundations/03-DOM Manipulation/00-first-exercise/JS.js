// your javascript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redSalute = document.createElement("p");
redSalute.textContent = "Hey I'm red!";
redSalute.setAttribute("style", "color : red");
container.appendChild(redSalute);

const h3BlueSalute = document.createElement("h3");
h3BlueSalute.textContent = "I'm a blue h3!";
h3BlueSalute.setAttribute("style", "color : blue");
container.appendChild(h3BlueSalute);

const divTextInside = document.createElement("div");
const h1InsideDiv = document.createElement("h1");
const pInsideDiv = document.createElement("p");
h1InsideDiv.textContent = "I'm in a div";
pInsideDiv.textContent = "ME TOO!";
divTextInside.appendChild(h1InsideDiv);
divTextInside.appendChild(pInsideDiv);
container.appendChild(divTextInside);