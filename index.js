
const message = document.querySelector('aside');
//create function call addMovie takes event as parameter
function addMovie (event){
    event.preventDefault();
    console.log("addMovie");
    const inputField = document.querySelector('input');
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.addEventListener('click', crossOffMovie);
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector('ul');
    list.appendChild(movie);
    inputField.value='';
}

function deleteMovie (event){
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
}

function crossOffMovie (event){
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!';
    } else {
        message.textContent = 'Movie added back!'
    }
}
document.querySelector('form').addEventListener('submit', addMovie);
