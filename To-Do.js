let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("enter text");
    return;
  }
  let li = document.createElement("li");
  let dlt = document.createElement("button");
  let done = document.createElement("button");
  dlt.classList.add("delete");
  done.classList.add("done");
  done.innerText = "Done";
  dlt.innerText = "Delete";
  list.appendChild(li);
  li.innerText = inp.value;
  li.appendChild(done);
  li.appendChild(dlt);

  inp.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("done")) {
    e.target.parentElement.classList.toggle("completed");
  }
});
