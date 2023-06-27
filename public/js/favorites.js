var favoriteIcon = document.getElementById("favorite-icon");
var favoriteIcon2 = document.getElementById("favorite-icon2");
const adoptIcon = document.getElementById("adopt-icon");

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

adoptIcon.addEventListener("click", () =>{
    adoptionGet();
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

            'Content-Type': 'application/json/'

        },
        body: JSON.stringify({

            // Include data here, like the user ID and pet ID

        })
        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error));

}

//POST ID OF THE PET
const getPetID = async() => {
    const response = await fetch('/adoption_form',{
        method: 'POST',
        body: JSON.stringify({id}),
        headers: { 'Content-Type': 'application/json' },
    });
}

//GET REQUEST
const adoptionGet = async () =>{
const response = await fetch('/adoption_form', {
    method: 'GET',
});
if(response.ok) {
    document.location.replace('/adoption_form');
}
};
