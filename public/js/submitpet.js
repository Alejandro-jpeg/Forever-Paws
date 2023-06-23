document.addEventListener("DOMContentLoaded", function() {

    // Select the form and submit button
    const form = document.querySelector('.user-form');
    const submitButton = document.querySelector('.submit-button');

    // Add event listener to the submit button
    submitButton.addEventListener("click", function(event) {

        // Prevent default form submission behavior
        event.preventDefault();

        // Gather form data
        const formData = new FormData();
        formData.append("pet_name", form.querySelector('.pet-name').value);
        formData.append("pet_breed", form.querySelector('.pet-breed').value);
        formData.append("pet_gender", form.querySelector('.pet-gender').value);
        formData.append("agency_id", form.querySelector('.agency-id').value);
        formData.append("pet_type", form.querySelector('.pet-type').value);
        formData.append("pet_age_range", form.querySelector('.pet-age-range').value);
        formData.append("description", form.querySelector('.description').value);
        formData.append("location", form.querySelector('.location').value);
        formData.append("pet_photo", form.querySelector('.pet-photo').value);

        // Send POST request
        fetch('http://localhost:3001/submit_pet', {

            method: 'POST',
            body: formData,
            headers: {

                "Content-Type": "multipart/form-data"

            }

        })
        .then(response => {

            if(response.ok) {

                return response.json();

            }
            else {

                throw new Error('Failed to submit pet');

            }

        })
        .then(data => {

            console.log(data);
            alert('Pet submitted successfully');

        })
        .catch(error => {

            console.error('Error:', error);
            alert('Failed to submit pet. Please try again.');

        });

    });

});