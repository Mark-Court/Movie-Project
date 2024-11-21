// https://www.omdbapi.com/?apikey=2022fb1c&s=fast

let movies;

async function renderMovies(filter) {
    const moviesWrapper = document.querySelector(".movies");

    moviesWrapper.classList += ' movies__loading';

    if (!movies) {
        movies = await getMovies();
    }

    moviesWrapper.classList.remove('movies__loading')

    if (filter === "old_to_new") {
        movies.sort((a, b) => (b.year - a.year));
    }
    else if (filter === "new_to_old") {
        movies.sort((a, b) => (a.yeat - b.year));
    }

    const moviesHtml = movies.map((movie) => {
       return `<div class="movie click">
              <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" alt="" class="movie__img" />
              </figure>
              <div class="movie__details">
                <div class="movie__title">Movie:${movie.Title}</div>
                <div class="movie__year">year:${movie.Year}</div>
              </div>
            </div>`;
    })
    .join("");

    moviesWrapper.innerHTML = moviesHtml;
}

function filterMovies(event) {
    renderMovies(event.target.value)
}

setTimeout(() => {
    renderMovies();
});