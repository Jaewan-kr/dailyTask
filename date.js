const date = document.querySelector("h3#today");

const arrayOfWeekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const day = today.getDay();
const weekdayName = arrayOfWeekdays[day];
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

date.innerText = weekdayName + " " + dd + "/" + mm + "/" + yyyy;
