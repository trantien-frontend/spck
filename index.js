function renderMovies (parentClass, keyJson) {
    const parent = document.querySelector(parentClass);
    fetch("./data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const movies = data[keyJson];
        let output = "";
        for (let index = 0; index <= 5; index += 1) {
            let movie = movies[index];
            output += `<div class="col-lg-2">
                            <div class="movie" data-id=${movie.id}>
                                <div class="movie-image">
                                    <img src="${movie.image_url}"
                                        alt="">
                                </div>
                                <div class="movie-desc">
                                    <p>${movie.name}</p>
                                </div>
                            </div>
                        </div>`; 
            
        }
        parent.innerHTML = output;
        // const listMovie = document.querySelectorAll(".movie");
    })
    .catch((exception) => {
        console.log('exception;', exception);
    } )
}

renderMovies (".trending-movie", "trending-movies");
renderMovies (".popular-movies", "popular-movies");


let userLogin = JSON.parse(localStorage.getItem("user-login"))