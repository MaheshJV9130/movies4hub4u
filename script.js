const userSearch = document.getElementById('search');
const searchBtn = document.getElementById('btn');
let movieContainer = document.getElementsByClassName('movieContainer')[0];
let movie;

// Common search function
function handleSearch() {
    movie = userSearch.value.trim();
    if (movie === "" || movie === undefined) {
        getData(); // Fetch default/random movies
    } else {
        movieContainer.innerHTML = "";
        getMovies(movie); // Search movies
    }
}

// For click button
searchBtn.addEventListener('click', handleSearch);

// For Enter key (on the input field!)
userSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
async function getMovies() {

try {
    let responce = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${movie}`);
    let data = await responce.json();
    let moviesArr = data.description;
    moviesArr.forEach(movieObj => {

        let movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `  <div class="img"><img loading= "lazy" src="${movieObj['#IMG_POSTER']}" alt="${movieObj['#TITLE']}"></div>
        <div class="title">
            <p>${movieObj['#TITLE']} ${movieObj['#YEAR']}</p>
        </div>
        <button id="dbtn">Download</button>`
        movieContainer.append(movieCard)
    });
} catch (error) {
    console.error(error )
}

}




let url = 'https://jsonfakery.com/movies/random/50';
async function getData(){
    let responce = await fetch(url)
    let moviesArr = await responce.json();
    moviesArr.forEach(movieObj => {;
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `  <div class="img"><img loading= "lazy" src="${movieObj.poster_path}" alt="${movieObj.original_title}"></div>
        <div class="title">
            <p>${movieObj.original_title} ${(movieObj.release_date.split('/').pop())}</p>
        </div>
        <button id="dbtn">Download</button>`
        let movieContainer = document.getElementsByClassName('movieContainer')[0];
        movieContainer.append(movieCard)
      

    });

}
document.addEventListener('DOMContentLoaded', () => {
    getData();
});
