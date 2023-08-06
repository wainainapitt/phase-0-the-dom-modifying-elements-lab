// Write your code here!
main.remove();

const newHeader = document.createElement("h1");
const body = document.createTextNode("Hello, World!");
newHeader.appendChild(body);
newHeader.setAttribute("id", "victory")
newHeader.textContent = "Peter is the champion"