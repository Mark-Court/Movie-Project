// https://www.omdbapi.com/?apikey=2022fb1c&s=fast

const moviesWrapper = document.querySelector(".movies");

async function renderMovies(filter) {
  const movieTitle = sessionStorage.getItem("movie_title");
  const title = (document.querySelector(".movie__search--bar").value ||
    movieTitle);
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=2022fb1c&s=${title || ""}`
  );
  const movieData = await movies.json();
  const result = movieData.Search;

console.log(title)

  if (filter === "old_to_new") {
    result.sort((a, b) => b.Year - a.Year);
  }
  if (filter === "new_to_old") {
    result.sort((a, b) => a.Yeat - b.Year);
  }

  moviesWrapper.innerHTML = result
    .map((movie) => {
      return `<div class="movie click">
              <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" alt="" class="movie__img" />
              </figure>
              <div class="movie__details">
                <div class="movie__title">Movie: ${movie.Title}</div>
                <div class="movie__year">Year: ${movie.Year}</div>
              </div>
            </div>`;
    })
    .join("");
}

function filterMovies(event) {
  renderMovies(event.target.value);
}

setTimeout(() => {
  renderMovies();
}, 1000);
