const form = document.getElementById("form");
const movieTitle = document.getElementById("title");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const movieTitleValue = movieTitle.value;

  sessionStorage.setItem("movie_title", movieTitleValue);

  window.location.href = "movie.html";
});
