const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  let city = document.getElementById("inp").value;

  if (city === "") {
    alert("Enter city name");
    return;
  }

  try {
    let response = await fetch(`https://wttr.in/${city}?format=j1`);

    let data = await response.json();

    document.getElementById("city").innerText = city;

    document.getElementById("temp").innerText =
      "Temperature : " + data.current_condition[0].temp_C + "°C";

    document.getElementById("desc").innerText =
      data.current_condition[0].weatherDesc[0].value;
  } catch (error) {
    document.getElementById("city").innerText = "City not found";
  }
});
