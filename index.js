//https://www.omdbapi.com/?apikey=31b6f6e5&s=

var term = document.getElementById("search__box")

async function findMovies(event){
    const term = event.target.value;
    search(term)
}

async function search(term){
    const title = await fetch(`https://www.omdbapi.com/?apikey=31b6f6e5&s=${term}`)
    const movie = await title.json();
    console.log(movie)
}



search()