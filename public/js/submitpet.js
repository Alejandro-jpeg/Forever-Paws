const newPet = async (event) => {
    event.preventDefault();
   
    const pet_name = document.querySelector('.pet-name').value;
    const pet_type = document.querySelector('.pet-type').value;
    const pet_breed = document.querySelector('.pet-breed').value;
    const pet_gender = document.querySelector('.pet-gender').value;
    const pet_age_range = document.querySelector('.pet-age-range').value;
    const description = document.querySelector('.description').value;
    const location = document.querySelector('.location').value;
    const agency_id = document.querySelector('.agency-id').value;
    const pet_photo = document.querySelector('.pet-photo').value;



    if (pet_name && pet_type && pet_gender) {
      const response = await fetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify({ pet_name, pet_type, pet_gender, pet_breed, pet_age_range, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to submit pet');
      }
    }
  };

  
  document.querySelector('.submitForm');
  document.addEventListener('submit', newPet);