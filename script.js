const userSearch = document.getElementById('search')
const searchBtn = document.getElementById('btn');
let movieContainer = document.getElementsByClassName('movieContainer')[0];
let movie;

searchBtn.addEventListener('click', () => {
    movie = userSearch.value
    if(movie == "" || movie == undefined){
        getData()
    }
    if(getData){
       movieContainer.innerHTML = "";
       getMovies()
    }
})
async function getMovies() {

try {
    let responce = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${movie}`);
    let data = await responce.json();
    let moviesArr = data.description;
    //  console.log(moviesArr)
    moviesArr.forEach(movieObj => {
        // console.log(movieObj['#TITLE']);

        let movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `  <div class="img"><img src="${movieObj['#IMG_POSTER']}" alt=""></div>
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


// For get random movies when document is load


let url = 'https://jsonfakery.com/movies/random/100';
async function getData(){
    let responce = await fetch(url)
    let moviesArr = await responce.json();
    // console.log(moviesArr)
    moviesArr.forEach(movieObj => {
        // console.log(movieObj.poster_path);
        // console.log(movieObj.original_title);
        // console.log(movieObj.release_date.split('/').pop());
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `  <div class="img"><img src="${movieObj.poster_path}" alt=""></div>
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
