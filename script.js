const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes(); 

console.log(showNotes)

const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

console.log(updateStorage)

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
        updateStorage();
    } 
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup =  () => {
                updateStorage();
            }
        })
    }

}); 