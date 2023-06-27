const cityDropdown = document.querySelector("#city-dropdown");
const typeDropdown = document.querySelector("#type-dropdown");
const breedDropdown = document.querySelector("#breed-dropdown");
const genderDropdown = document.querySelector("#gender-dropdown");
const ageRangeDropdown = document.querySelector("#age-range-dropdown");
const agencyDropdown = document.querySelector("#agency-dropdown");
const searchButton = document.querySelector("#search-button");
let selectedResults = [];

searchButton.addEventListener("click", () => {
  const selectedCity =
    cityDropdown && cityDropdown.value ? [cityDropdown.value] : [];
  const selectedType =
    typeDropdown && typeDropdown.value ? [typeDropdown.value] : [];
  const selectedBreed =
    breedDropdown && breedDropdown.value ? [breedDropdown.value] : [];
  const selectedGender =
    genderDropdown && genderDropdown.value ? [genderDropdown.value] : [];
  const selectedAgeRange =
    ageRangeDropdown && ageRangeDropdown.value ? [ageRangeDropdown.value] : [];
  const selectedAgency =
    agencyDropdown && agencyDropdown.value ? [agencyDropdown.value] : [];


  const queryParams = [];

  if (selectedCity) {
    queryParams.push(`city=${encodeURIComponent(selectedCity)}`);
  }
  if (selectedType) {
    queryParams.push(`pet_type=${encodeURIComponent(selectedType)}`);
  }
  if (selectedBreed) {
    queryParams.push(`pet_breed=${encodeURIComponent(selectedBreed)}`);
  }
  if (selectedGender) {
    queryParams.push(`pet_gender=${encodeURIComponent(selectedGender)}`);
  }
  if (selectedAgeRange) {
    queryParams.push(`pet_age_range=${encodeURIComponent(selectedAgeRange)}`);
  }
  if (selectedAgency) {
    queryParams.push(`agency_id=${encodeURIComponent(selectedAgency)}`);
  }

  
  console.log(queryParams);

  const queryParamsString = queryParams.join("&");
  window.location.href = `/query_results?${queryParamsString}`;

  console.log("heyy");

  
});
