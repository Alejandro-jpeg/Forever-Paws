var favoriteIcon = document.getElementById("favorite-icon");
var favoriteIcon2 = document.getElementById("favorite-icon2");

favoriteIcon.addEventListener("click", function() {
    favoriteIcon.classList.add("hidden");
    favoriteIcon2.classList.remove("hidden");
});

favoriteIcon2.addEventListener("click", function() {
    favoriteIcon2.classList.add("hidden");
    favoriteIcon.classList.remove("hidden");
});