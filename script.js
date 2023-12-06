const newYearsEve = new Date("January 1, 2024 00:00:00").getTime(); //returns the number of milliseconds of the new year
const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const mins_el = document.getElementById("mins");
const seconds_el = document.getElementById("seconds");

setInterval(countdown, 1000);

function countdown() {
  const currentTime = Date.now();
  const diff = newYearsEve - currentTime;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  days_el.innerText = days;
  hours_el.innerText = hours;
  mins_el.innerText = mins;
  seconds_el.innerText = seconds;
}
