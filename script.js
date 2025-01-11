const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="assets/trash.234x256.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
}); 