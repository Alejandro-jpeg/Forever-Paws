var favoriteIcon = document.querySelectorAll(".favorite-icon");
var favoriteIcon2 = document.querySelectorAll(".favorite-icon2");
const adoptIcon = document.getElementById("adopt-icon");

favoriteIcon.forEach(icon => {

    icon.addEventListener("click", function() {

        const petId = icon.dataset.petid;
        toggleFavorite(true, petId);
        icon.classList.add("hidden");

    });

});

favoriteIcon2.forEach(icon => {

    icon.addEventListener("click", function() {

        const petId = icon.dataset.petid;
        toggleFavorite(false, petId);
        icon.classList.add("hidden");

    });

});

adoptIcon.forEach(icon => {

    icon.addEventListener("click", function() {

        // Pending logic
        adoptionGet();

    })

})

async function toggleFavorite(shouldFavorite, petId) {

    try {

        const userId = await getCurrentUserId();

        await fetch('/api/dashboard/toggleFavorite', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify({

                user_id: userId,
                pet_id: petId,
                shouldFavorite

            })

        });

    }
    catch(error) {

        console.error('Error', error);

    }

}

async function getCurrentUserId() {

    const response = await fetch('/api/users/current');
    const data = await response.json();
    return data.id;

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