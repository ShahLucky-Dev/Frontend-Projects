const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

// dropdown me sare country lane ke liye
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOp = document.createElement("option");

    newOp.innerText = currCode;
    newOp.value = currCode;

    select.append(newOp);

    // flag change

    select.addEventListener("change", (evt) => {
      Flag(evt.target);
    });
  }
}

// flag changing logic
const Flag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];

  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  let img = element.parentElement.querySelector("img");

  img.src = newsrc;
};
