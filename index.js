//https://www.omdbapi.com/?apikey=31b6f6e5&s=
const term = document.getElementById(`input-box`);
const movieListE1 = document.querySelector(" .movies__container")
const movieWrapper = document.querySelector(" .movie--wrap")

let allMovies = [""]

async function findMovies(event){
    const term = event.target.value
    search(term)
}

async function search(term){
    movieWrapper.classList.remove(`movies__loading-none`);
    const movies = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=31b6f6e5`);
    const moviesData = await movies.json();
    
    if (moviesData.Search){
        allMovies = moviesData.Search;
        displayMovies(allMovies.slice(0,6))
    }
    else {
        movieListE1.innerHTML = 
        "<h3>No movies found</h3>";
        movieWrapper.classList.add(`movies__loading-none`);
    }
}


function displayMovies(movies){
    setTimeout(() => {
        movieListE1.innerHTML = movies.map(movie =>
     `<div class="movie">
    <figure>
        <img class="movie__img" src="${movie.Poster}" alt="">
    </figure>
    <h1>${movie.Title}</h1>
    <h2>Year: ${movie.Year}</h2>
</div>`
).join("");
movieWrapper.classList.add(`movies__loading-none`);
},1000)
}
