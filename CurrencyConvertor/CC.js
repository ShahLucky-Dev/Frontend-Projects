const url = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.getElementById("btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

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

// button click events

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector("form input");
  amtval = amount.value;
  if (amount === "" || amount.value < 1) {
    amtval = 1;
    amount.value = "1";
  }
  // console.log(fromCurr.value, toCurr.value);
  const newurl = `${url}/${fromCurr.value}`;

  let response = await fetch(newurl);
  let data = await response.json();

  let rate = data.rates[toCurr.value];

  let finalamount = amtval * rate;
  msg.innerText = `${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
});
