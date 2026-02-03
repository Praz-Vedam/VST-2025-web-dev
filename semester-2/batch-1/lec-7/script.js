// =========== Taking input ==========

const inputElem = document.querySelector("input");
const buttonElem = document.querySelector("#search");

buttonElem.addEventListener("click", () => {
  const location = inputElem.value.trim();
  console.log(location);
  //call the API ->
  fetchWeather(location).then((data) => {
    // console.log("Data is ...", data);
  //update the DOM

 updateDOM(data);

  });


  inputElem.value = "";
});

async function fetchWeather(location) {
  console.log("Inside function");

  const url = `https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=${location}&aqi=no`;
  const response = await fetch(url);
  console.log(response);
  const jsonData = await response.json();

  return jsonData;
}


function updateDOM(data){
// ************filter required data*************
console.log("Will update DOM",data);

const temperature = data.current.temp_c;
const location = data.location.name;
const timedata = data.location.localtime;
const [date , time] = timedata.split(" "); // "2026-01-23 10:07"
const iconUrl = data.current.condition.icon;


  // ************update the dom*************
//select elem.

const tempElem = document.querySelector(".temperature");
const locationElem = document.querySelector(".location");
const iconElem = document.querySelector("img");

tempElem.textContent = temperature;
locationElem.textContent = location;
iconElem.src = iconUrl;

//Update rest of the things


}