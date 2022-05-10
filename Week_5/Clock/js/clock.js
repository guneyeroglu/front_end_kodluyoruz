function showTime() {
  let today = new Date();
  let days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (hours < 10) {
    hours += "0";
  }

  if (minutes < 10) {
    minutes += "0";
  }

  if (seconds < 10) {
    seconds += "0";
  }

  let time = `${hours}:${minutes}:${seconds} - `;
  let todayName = today.getDay();
  let currentTime = document.querySelector("#myClock");
  currentTime.innerHTML = `${time} ${days[todayName - 1]}`;
  setTimeout(showTime, 1);
}

showTime();
let firstName = document.querySelector("#myName");
let userName = prompt("Lütfen adınızı girin.");

if (userName) {
  firstName.innerHTML = `${userName}`;
} else {
  firstName.innerHTML = "isimsiz";
}
