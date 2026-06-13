let addbtn = document.getElementById("btn");

let addnew = document.querySelector(".addnew");
let note = document.querySelector(".note");
let cross = document.querySelector("#cross");

addnew.addEventListener("click", () => {
  note.style.display = "block";
  document.getElementById("title").value = "";
  document.getElementById("Description").value = "";
});

cross.addEventListener("click", () => {
  note.style.display = "none";
});

addbtn.addEventListener("click", () => {
  note.style.display = "none";
  let div = document.createElement("div");
  div.classList.add("mynote");
  div.innerHTML = `
       <h1>${document.getElementById("title").value}</h1>
        <p>${document.getElementById("Description").value}</p>
        <button class= "delete">Delete</button>`;
  document.querySelector(".newNote").appendChild(div);

  let dltbtn = div.querySelector(".delete");
  dltbtn.addEventListener("click", () => {
    div.remove();
  });
});
