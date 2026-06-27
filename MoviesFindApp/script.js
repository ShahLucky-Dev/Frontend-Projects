let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

async function searchMovie() {
  if (inp.value === "") {
    alert("Enter valid movie name");
    return;
  }
  result.innerText = "Loading....";
  let response = await fetch(
    `https://www.omdbapi.com/?apikey=fac55369&t=${inp.value}`,
  );
  let data = await response.json();
  if (data.Response === "False") {
    result.innerHTML = `<h2>Movie not found</h2>`;
    return;
  }
  // console.log(data);
  result.innerHTML = `<div class="movie-card">
  <img id="poster" src="${data.Poster}" width="200"></img>
   <div class="detail">
  <h2>${data.Title}</h2>
  
 
  <p>${data.Year}</p>
  <br/>
  <p>${data.Genre}</p>
  <br/>
  <p>${data.imdbRating}</p>
  <br/>
  <p>${data.Plot}</p>
  </div>
  </div>
  `;
}

btn.addEventListener("click", searchMovie);
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchMovie();
  }
});
