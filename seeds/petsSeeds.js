const { Pet } = require("../models");

//Pet data
const petData = [
  {
    id: 1,
    pet_name: "Dabini",
    pet_breed: "Galgo",
    pet_type: "Dog",
    pet_gender: "Female",
    pet_age_range: "Senior",
    description:
      "A beautiful companion for evening walks in the abbey, not a more trusty companion will you find in the eastern counties",

    location: "16936 Parsonage Lake Ln Odessa, Florida(FL), 33556 ",
    agency_id: 1,
  },
  {
    id: 2,
    pet_name: "Gabagool",
    pet_breed: "Canadian Sphynx",
    pet_type: "Cat",
    pet_gender: "Female",
    pet_age_range: "Kitten",
    description:
      "A forebodding and menacing presence invades the spaces it inhabits, there is not a most loving and caring creature on this plane of existence other than this little creature ",

    location: "52 E Beverly Pky Valley Stream, New York(NY), 11580",
    agency_id: 3,
  },
  {
    id: 3,
    pet_name: "Maurice",
    pet_breed: "Cornish Rex",
    pet_type: "Cat",
    pet_gender: "Female",
    pet_age_range: "Adult",
    description:
      "A playful little trickster, never a dull moment when you have it by your side",

    location: "1716 N Hayford Ave Lansing, Michigan(MI), 48912",
    agency_id: 2,
  },
  {
    id: 4,
    pet_name: "Lulis",
    pet_breed: "Shar Pei",
    pet_type: "Dog",
    pet_gender: "Female",
    pet_age_range: "Adult",
    description:
      "A nice homebody, super chill",
    location: "1716 N Hayford Ave Lansing, Michigan(MI), 48912",
    agency_id: 2,
  },
  {
    id: 5,
    pet_name: "Rex",
    pet_breed: "Chihuahua",
    pet_type: "Dog",
    pet_gender: "Male",
    pet_age_range: "Adult",
    description:
      "Little energetic companion, great as an alarm",
    location: "1716 N Hayford Ave Lansing, Michigan(MI), 48912",
    agency_id: 2,
  },
  {
    id: 6,
    pet_name: "Gladys",
    pet_breed: "Labrador",
    pet_type: "Dog",
    pet_gender: "Female",
    pet_age_range: "Senior",
    description:
      "A caring old lady, with random zoomies and lots of love, great with kids",
    location: "52 E Beverly Pky Valley Stream, New York(NY), 11580",
    agency_id: 3,
  },
  {
    id: 7,
    pet_name: "Bert",
    pet_breed: "Siamese Cat",
    pet_type: "Cat",
    pet_gender: "Male",
    pet_age_range: "Adult",
    description:
      "An independent curious cat, loves making biscuits",
    location: "52 E Beverly Pky Valley Stream, New York(NY), 11580",
    agency_id: 3,
  },
  {
    id: 8,
    pet_name: "Guti",
    pet_breed: "Birman",
    pet_type: "Cat",
    pet_gender: "Female",
    pet_age_range: "Kitten",
    description:
      "Cute little kitten, loves to be around humans, very loving ",
    location: "16936 Parsonage Lake Ln Odessa, Florida(FL), 33556 ",
    agency_id: 1,
  },
];

const seedPets = () => Pet.bulkCreate(petData);
module.exports = seedPets;
