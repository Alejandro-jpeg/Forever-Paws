const cityDropdown = document.querySelector("#city-dropdown");
const typeDropdown = document.querySelector("#type-dropdown");
const breedDropdown = document.querySelector("#breed-dropdown");
const genderDropdown = document.querySelector("#gender-dropdown");
const ageRangeDropdown = document.querySelector("#age-range-dropdown");
const agencyDropdown = document.querySelector("#agency-dropdown");
const searchButton = document.querySelector("#search-button");
let selectedResults = [];

searchButton.addEventListener("click", () => {
  e.preventDefault();
  const selectedCity = cityDropdown.value;
  const selectedType = typeDropdown.value;
  const selectedBreed = breedDropdown.value;
  const selectedGender = genderDropdown.value;
  const selectedAgeRange = ageRangeDropdown.value;
  const selectedAgency = agencyDropdown.value;

  let selectedResults = {
    city: selectedCity,
    type: selectedType,
    breed: selectedBreed,
    gender: selectedGender,
    ageRange: selectedAgeRange,
    agency: selectedAgency,
  };


  fetch("/homepage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedResults),
  })
    .then((response) => response.json())
    .then((data) => {
      searchResultsContainer.innerHTML = html;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
