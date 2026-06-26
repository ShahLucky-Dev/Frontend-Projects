let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", async () => {
  let response = await fetch(
    `https://www.omdbapi.com/?apikey=fac55369&t=${inp.value}`,
  );
  let data = await response.json();
  result.innerHTML = `
  <h2>${data.Title}</h2>
  <p>${data.Year}</p>
  <img src "${data.Poster}" width="200"></img>
  <p>${data.imbdRating}</p>
  <p>${data.Plot}</p>
  `;
});
