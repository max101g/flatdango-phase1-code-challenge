// create a DOMContentLoaded event listener
document.addEventListener ('DOMContentLoaded', ()=> {
    displayMovie ();
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
    const favouritesList = document.querySelector ('#movielist')
    const listDiv = document.createElement ('div')
    listDiv.innerHTML = movies.name
    favouritesList.appendChild (listDiv)
    listDiv.style.cursor = 'pointer'

//Give the list a click event listener
    listDiv.addEventListener ('click', (e)=> {
        e.preventDefault ()
        const cinemaPoster = document.querySelector ('img#image')
        cinemaPoster.src = movies.poster 
        const cardTitle = document.querySelector ('.card-title')
        cardTitle.innerHTML = movies.name
        const movieDescription = document.querySelector ('.card-text')
        movieDescription.innerHTML = movies.description
        const movieTime = document.querySelector ('#movie-time')
        movieTime.innerHTML = movies.time
        const ticketNumbers= document.querySelector ('#ticket-numbers')
        ticketNumbers.innerHTML = movies.tickets



//Give the button a click event && allow it to decrement everytime its clicked
        const buyTicketBtn = document.querySelector ('#btn')
        buyTicketBtn.addEventListener ('click', (e) => {
            e.preventDefault ()
            let newTickets = document.querySelector ('#ticket-numbers')
            let i = (-- movies.tickets)
            newTickets.innerHTML = i
            if (i < 0){
                return (newTickets.innerHTML = 'Sold Out')
            } //else if (i < 1 && i === 0) {
            //     alert ('Sorry, Your Favourite Movies is Sold Out !!!')
            // }
        })
    })
};

//Extra Delivarables

// const editBtn = document.querySelector ('.extra')
// editBtn.addEventListener ('click', myEditFun)


// function myEditFun () {
//     alert
// }


// let post = {
//     method: 'POST',
//     Headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify ({
//         name:'',
//         time: '',
//         tickets: '',
//         poster: '',
//         description: ''
//     })
// }

// function editer () {
//     fetch ('http://localhost:3000/movies', post)
//     .then ((resp)=> resp.json() )
//     .then (postMovies)
//     console.log (postMovies)
// }
