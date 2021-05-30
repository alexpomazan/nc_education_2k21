let dataDay = document.querySelector(".datatime__day");
let dataMonth = document.querySelector(".datatime__month");
let dataWday = document.querySelector(".datatime__wday");
let dataTime = document.querySelector(".datatime__time");
let dataHour = document.querySelector(".datatime__hour");
let dataMin = document.querySelector(".datatime__min");

(function () {
  let days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
})();

const date = new Date();

let Wday = date.getDayName() + "&nbsp;";
let month = date.getMonthName() + ", ";
let day = date.getDate();
day = day < 10 ? "0" + day : day;
// let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
// let minutes =
//   date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
// let time = hours + ":" + minutes;

function dateHours() {
  const date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  return hours;
}
function dateMins() {
  const date = new Date();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return minutes;
}
dataDay.innerHTML = day;
dataMonth.innerHTML = month;
dataWday.innerHTML = Wday;
dataHour.innerHTML = dateHours();
dataMin.innerHTML = dateMins();
setInterval(function () {
  dataHour.innerHTML = dateHours();
  dataMin.innerHTML = dateMins();
  dataTime.classList.add("_hiden");
}, 1000);
setInterval(function () {
  dataTime.classList.remove("_hiden");
}, 2000);
