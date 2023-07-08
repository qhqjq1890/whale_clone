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

getClock();
getDate();
setInterval(getClock, 1000);
