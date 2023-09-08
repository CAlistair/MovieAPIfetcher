//https://www.omdbapi.com/?apikey=31b6f6e5&s=

const term = document.getElementById(`input-box`);

async function findMovies(event){
    const term = event.target.value
    search(term)
}

async function search(term){
    const movies = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=31b6f6e5`);
    const moviesData = await movies.json();
    console.log(moviesData)
}


