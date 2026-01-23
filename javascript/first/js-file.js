const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

const spam = document.querySelectorAll(".spam");
spam.forEach(s => s.remove());

p.textContent = "Hey I'm red!";
/* p.classList.add("red-text");
 */
p.style.color = "red";

h3.textContent = "I'm a blue h3!";
/* h3.classList.add("blue-text");
 */
h3.style.color = "blue";

div.classList.add("pinkBack");

div.style.border = "6px solid black"
div.style.backgroundColor = "pink"

h1.textContent = "i'm in a div"

p2.textContent = "me too!"

div.append(h1, p2);
document.body.append(p, h3, div);

Array.from(div.children).forEach(e => e.style.color = "darkBlue");

const btn = document.querySelector(".btn");
btn.addEventListener("click", changeDivBackground);
function changeDivBackground() {
    if (div.style.backgroundColor === "rgb(211, 211, 211)") {
        div.style.backgroundColor = "pink";
    } else if (div.style.backgroundColor === "pink") {
    div.style.backgroundColor = "rgb(211, 211, 211)";
    } else return "error";
}