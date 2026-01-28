const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");
const themeBtn = document.createElement("button");
const container = document.querySelector(".container");
const shoppingListContainer = document.querySelector(".shopping-list-container");


const spam = document.querySelectorAll(".spam");
spam.forEach(s => s.remove());

p.textContent = "Hey I'm red!";
p.style.color = "red";
/* p.classList.add("red-text");     */

h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
/* h3.classList.add("blue-text");   */

div.style.border = "6px solid black"
div.style.backgroundColor = "rgb(211, 211, 211)"
/* div.classList.add("pinkBack");   */

h1.textContent = "i'm in a div";

p2.textContent = "me too!";

themeBtn.textContent = "Change theme";
themeBtn.classList.add("btn");

div.append(h1, p2);
container.append(p, h3, div, themeBtn, shoppingListContainer);

Array.from(div.children).forEach(e => e.style.color = "darkBlue");

const firstBtn = document.querySelector("#first-btn");
firstBtn.addEventListener("mouseenter", changeDivBackground);
firstBtn.addEventListener("mouseleave", changeDivBackground);
function changeDivBackground(e, smn) {
    if (div.style.backgroundColor === "rgb(211, 211, 211)") {
        div.style.backgroundColor = "pink";
    } else if (div.style.backgroundColor === "pink") {
    div.style.backgroundColor = "rgb(211, 211, 211)";
    } else return "error";
}
firstBtn.addEventListener("click", e => e.target.style.color = "black");
firstBtn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});
document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');   
});

/* Example for mouse move:

let i = 0;
function countMovement () {
    
    i++;
    console.log(i);
};

firstBtn.addEventListener('mousemove', countMovement); */

function changeTheme () {
    container.classList.toggle("container-light-theme");
    container.classList.toggle("container-dark-theme");
};
themeBtn.addEventListener('click', changeTheme);


const inputBox = document.querySelector("#shopping-list-input");
const addBtn = document.querySelector("#add-btn");
const list = document.createElement("ul");

list.classList.add("shopping-list");
shoppingListContainer.append(list);

function addItem() {
    const cleanValue = inputBox.value.trim();
    if (!cleanValue) return;

    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    
    listItem.textContent = `${cleanValue} || `;
    deleteBtn.textContent = "Delete item";
    deleteBtn.classList.add("btn");

    deleteBtn.addEventListener("click", () => listItem.remove());
    
    listItem.append(deleteBtn);
    list.append(listItem);

    inputBox.value = "";
    inputBox.focus();
}


addBtn.addEventListener("click", addItem);
inputBox.addEventListener("keydown", e => {
    if (e.key === "Enter") addItem();
    });


