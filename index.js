//https://www.omdbapi.com/?apikey=31b6f6e5&s=

const term = document.getElementById("search__box")

async function findMovies(event){
    const term = event.target.value
    search(term)
}

async function search(term){
    const movies = await fetch(`https://www.omdbapi.com/?apikey=31b6f6e5&s=${term}`);
    const moviesData = await movies.json();
    console.log(moviesData)
}

search()