//https://www.omdbapi.com/?apikey=31b6f6e5&s=

const searchbox = document.getElementById(" search__box");

async function search(term){
    const title = await fetch(`https://www.omdbapi.com/?apikey=31b6f6e5&s=${term}`)
    const movie = await title.json();
    console.log(movie)
}


function findMovies(){
    let term = (searchbox.value).trim();
}