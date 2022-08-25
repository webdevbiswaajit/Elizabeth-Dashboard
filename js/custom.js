const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("dashboard_left");
const hide_link = document.getElementsByClassName("h_link");
console.log(hide_link);
toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};
