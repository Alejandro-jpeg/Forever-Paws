const cityDropdown = document.querySelector("#city-dropdown");
const typeDropdown = document.querySelector("#type-dropdown");
const breedDropdown = document.querySelector("#breed-dropdown");
const genderDropdown = document.querySelector("#gender-dropdown");
const ageRangeDropdown = document.querySelector("#age-range-dropdown");
const agencyDropdown = document.querySelector("#agency-dropdown");
const searchButton = document.querySelector("#search-button");
let selectedResults = [];



searchButton.addEventListener("click", () => {
  const selectedCity = cityDropdown && cityDropdown.value ? [cityDropdown.value] : [];
  const selectedType = typeDropdown && typeDropdown.value ? [typeDropdown.value] : [];
  const selectedBreed = breedDropdown && breedDropdown.value ? [breedDropdown.value] : [];
  const selectedGender = genderDropdown && genderDropdown.value ? [genderDropdown.value] : [];
  const selectedAgeRange = ageRangeDropdown && ageRangeDropdown.value ? [ageRangeDropdown.value] : [];
  const selectedAgency = agencyDropdown && agencyDropdown.value ? [agencyDropdown.value] : [];


  let selectedResults = {
    city: selectedCity,
    type: selectedType,
    breed: selectedBreed,
    gender: selectedGender,
    ageRange: selectedAgeRange,
    agency: selectedAgency,
  };

  const queryParams = []

  if (selectedCity) {
    queryParams.push(`city=${selectedCity}`);
  }
  if (selectedType) {
    queryParams.push(`type=${selectedType}`);
  }
  if (selectedBreed) {
    queryParams.push(`breed=${selectedBreed}`);
    console.log(selectedBreed);
  }
  if (selectedGender) {
    queryParams.push(`gender=${selectedGender}`);
  }
  if (selectedAgeRange) {
    queryParams.push(`ageRange=${selectedAgeRange}`);
  }
  if (selectedAgency) {
    queryParams.push(`agency=${selectedAgency}`);
  }

  
  //hacer navegacion al query params a la query view
  fetch("/query_results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedResults),
  })
    .then((response) => response.json())
    .then((data) => {
      const queryHandlebar = `http://localhost:3001/query_results.handlebars?${queryParams.join('&')}`;

      window.location.href = queryHandlebar;

      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
