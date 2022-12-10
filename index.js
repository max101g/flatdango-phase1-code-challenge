// const { header } = require("express/lib/request");
// const { json } = require("express/lib/response");

// create a DOMContentLoaded event listene
document.addEventListener ('DOMContentLoaded', ()=> {
    displayMovie ();
    postMovies ();
})

//Create a function for GET fetch

function displayMovie () {
    fetch ('http://localhost:3000/movies')
    .then ((response)=> response.json ())
    .then (favMovies)
}

// Create a function that iterates through the fetched data

function favMovies (movies) {
    movies.forEach (myMoviesList)
}

//Create a function that allows one to display movies on a list

function myMoviesList (movies) {
    const favouritesList = document.querySelector ('#list')
    const movieSpan = document.createElement ('span')
    movieSpan.innerHTML = movies.name
    favouritesList.appendChild (movieSpan)
    favouritesList.addEventListener ('click', ()=> {
        const cardTitle = document.querySelector ('.card-title')
        cardTitle.innerHTML = movies.name
        const movieDescription = document.querySelector ('.card-text')
        movieDescription.innerHTML = movies.description
        const movieTime = document.querySelector ('#movie-time')
        movieTime.innerHTML = movies.time
        const ticketNumbers= document.querySelector ('#ticket-numbers')
        ticketNumbers.innerHTML = movies.tockets
        const buyTicketBtn = document.querySelector ('#btn')
        buyTicketBtn.addEventListener ('click', ()=> {
            console.log ('am awsome')
        })
    })
}

// function postMovies (posted) {
//     fetch ('http://localhost:3000/movies', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify {
//             name: '',
//             time: '',
//             tockets: 0,
//             poster: '',
//         }
//     })
//     .then ((resp)=> resp.json ())
//     . then (movieData)
// }
