const hm = document.getElementById("hm");
const sec = document.getElementById("sec");
const period = document.getElementById("period");

function getClock() {
  let newDate = new Date();
  let hours = String(newDate.getHours()).padStart(2, "0");
  let minutes = String(newDate.getMinutes()).padStart(2, "0");
  let seconds = String(newDate.getSeconds()).padStart(2, "0");
  let per = newDate.getHours >= 12 ? "PM" : "AM";

  hm.innerText = `${hours}:${minutes}`;
  sec.innerText = `${seconds}`;
  period.innerText = `${per}`;
}

function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let dt = date.getDate();
  let daykor = ["월", "화", "수", "목", "금", "토", "일"][date.getDay()];
  document.getElementById(
    "date"
  ).innerText = `${year}년 ${month}월 ${dt}일 ${daykor}요일`;
}

async function getWeather() {
  try {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=ed243edc132d40e7b00151036230807&q=Seoul&lang=ko"
    );
    const data = await response.json();
    console.log(data.current.condition.icon);
    const weatherElements = document.getElementsByClassName("weather");
    Array.from(weatherElements).forEach((element) => {
      element.style.display = "flex";
      element.innerHTML = `<img src="${data.current.condition.icon}" width=20px height=20px alt="weather"> <p>${data.current.condition.text}</p>`;
    });
  } catch (error) {
    console.error(error);
  }
}

getClock();
getDate();
getWeather();
setInterval(getClock, 1000);
