//Take input from user and print it onClick of the button.

const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  // alert("I was clicked")
  const location = searchInput.value;
  //Call API

  fetchWeather(location).then((data) => {
    console.log("Data is ... ", data);

    //Update DOM

    updateDOM(data);
  });

  searchInput.value = ""; //
});

async function fetchWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=${location}&aqi=no`;
  const response = await fetch(url);
  //   console.log(response);

  //error handling

  if (response.status === 400) {
    //error logging location doesnt exist... //to-do
    return error;
  } else {
    const jsonData = await response.json();
    //   console.log(jsonData);

    return jsonData;
  }
}

function updateDOM(data) {
  // ************1. filter required data*************
//   console.log("I will update the dom ", data);
const temp = data.current.temp_c;
const location = data.location.name;
const timeData = data.location.localtime;  //"2026-01-23 12:24"
const [date, time] = timeData.split(" ");
const iconUrl = data.current.condition.icon;

console.log(temp,location,date,time,iconUrl);

  // ************2. update the dom*************

const temperatureEl = document.querySelector(".temperature");
const locationEl = document.querySelector(".location");
const iconImg = document.querySelector("img");

temperatureEl.textContent = temp + " C";
locationEl.textContent = location;
iconImg.src = iconUrl;

//update date-time etc

}
