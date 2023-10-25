const ratingWindow = document.querySelector(".box-rating");
const thanksWindow = document.querySelector(".box-thanks");
const submitRatingButton = document.getElementById("submit-rating");

submitRatingButton.addEventListener("click", () => {
  thanksWindow.classList.remove("hidden");
  ratingWindow.classList.add("hidden");
});
