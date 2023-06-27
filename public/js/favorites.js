var favoriteIcon = document.getElementById("favorite-icon");
var favoriteIcon2 = document.getElementById("favorite-icon2");

favoriteIcon.addEventListener("click", function() {
    addToFavorites();
    favoriteIcon.classList.add("hidden");
    favoriteIcon2.classList.remove("hidden");
});

favoriteIcon2.addEventListener("click", function() {
    removeFromFavorites();
    favoriteIcon2.classList.add("hidden");
    favoriteIcon.classList.remove("hidden");
});

function addToFavorites() {

    // Replace with final endpoint
    fetch('/api/addToFavorites', {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },
        body: JSON.stringify({

            // Include data here, like the user ID and the pet ID

        })

    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));

}

function removeFromFavorites() {

    // Replace with final endpoint
    fetch('/api/removeFromFavorites', {

        method: 'POST',
        headers: {

            'Content-Ty[e': 'application/json/'

        },
        body: JSON.stringify({

            // Include data here, like the user ID and pet ID

        })
        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error));

}