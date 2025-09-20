// Navigation
function showSection(id) {
  document.querySelectorAll("main .card").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}