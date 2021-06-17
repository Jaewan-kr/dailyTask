const date = document.querySelector("h3#today");

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

date.innerText = dd + "/" + mm + "/" + yyyy;
