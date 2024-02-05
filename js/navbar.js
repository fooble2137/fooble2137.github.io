const btn = document.getElementById("mobile-btn");
const nav = document.getElementById("mobile-nav");

btn.addEventListener("click", function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
