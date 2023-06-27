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

    location: "11 Upper Cibolo Creek Rd, Boerne, TX 78006, USA",
    agency_id: 1,
    pet_photo: "images/dabini.png"
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
    pet_photo: "images/gabagool.png"
  },
  {
    id: 3,
    pet_name: "Maurice",
    pet_breed: "Cornish Rex",
    pet_type: "Cat",
    pet_gender: "Male",
    pet_age_range: "Adult",
    description:
      "A playful little trickster, never a dull moment when you have it by your side",

    location: "3900 MAGNOLIA ST DENVER CO 80207-1442",
    agency_id: 2,
    pet_photo: "images/maurice.png"
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
    location: "3900 MAGNOLIA ST DENVER CO 80207-1442",
    agency_id: 2,
    pet_photo: "images/lulis.png"
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
    location: "3900 MAGNOLIA ST DENVER CO 80207-1442",
    agency_id: 2,
    pet_photo: "images/rex.png"
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
    pet_photo: "images/gladys.png"
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
    pet_photo: "images/bert.png"
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
    location: "11 Upper Cibolo Creek Rd, Boerne, TX 78006, USA",
    agency_id: 1,
    pet_photo: "images/guti.png"
  },
  {
    id: 9,
    pet_name: 'Fluffy',
    pet_breed: 'Golden Retriever',
    pet_type: 'Dog',
    pet_gender: 'Female',
    pet_age_range: 'Adult',
    description: 'Fluffy is a friendly and playful dog.',
    location: "11 Upper Cibolo Creek Rd, Boerne, TX 78006, USA", // Replace with the actual location ID from the agencies table
    agency_id: 1, // Replace with the actual agency ID from the agencies table
    pet_photo: "images/fluffy.png"
  },
  {
      id: 10,
      pet_name: 'Whiskers',
      pet_breed: 'Siamese',
      pet_type: 'Cat',
      pet_gender: 'Male',
      pet_age_range: 'Senior',
      description: 'Whiskers is a calm and independent cat.',
      location: "3900 MAGNOLIA ST DENVER CO 80207-1442", // Replace with the actual location ID from the agencies table
      agency_id: 2, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/whiskers.png"
  },
  {
      id: 11,
      pet_name: 'Milo',
      pet_breed: 'Persian',
      pet_type: 'Cat',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Milo is a calm and affectionate Persian cat.',
      location: "3900 MAGNOLIA ST DENVER CO 80207-1442", // Replace with the actual location ID from the agencies table
      agency_id: 2, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/milo.png"
  },
  {
      id: 12,
      pet_name: 'Luna',
      pet_breed: 'Labrador Retriever',
      pet_type: 'Dog',
      pet_gender: 'Female',
      pet_age_range: 'Puppy',
      description: 'Luna is an adorable and playful Lab Retriever puppy.',
      location: "11 Upper Cibolo Creek Rd, Boerne, TX 78006, USA", // Replace with the actual location ID from the agencies table
      agency_id: 1, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/luna.png"
  },
  {
      id: 13,
      pet_name: 'Simba',
      pet_breed: 'Maine Coon',
      pet_type: 'Cat',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Simba is a majestic Maine Coon cat with beautiful fur.',
      location: "52 E Beverly Pky Valley Stream, New York(NY), 11580", // Replace with the actual location ID from the agencies table
      agency_id: 3, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/simba.png"
  },
  {
      id: 14,
      pet_name: 'Max',
      pet_breed: 'German Shepherd',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Max is a loyal and intelligent German Shepherd.',
      location: "7171 Sherman Lane Belvidere Center, VT 05442", // Replace with the actual location ID from the agencies table
      agency_id: 4, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/max.png"
  },
  {
      id: 15,
      pet_name: 'Coco',
      pet_breed: 'Siamese',
      pet_type: 'Cat',
      pet_gender: 'Female',
      pet_age_range: 'Adult',
      description: 'Coco is a graceful and vocal Siamese cat.',
      location: "3900 MAGNOLIA ST DENVER CO 80207-1442", // Replace with the actual location ID from the agencies table
      agency_id: 2, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/coco.png"
  },
  {
      id: 16,
      pet_name: 'Rocky',
      pet_breed: 'Boxer',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Rocky is a strong and playful Boxer.',
      location: "77 Rosewood Rd. Orlando, FL 32811", // Replace with the actual location ID from the agencies table
      agency_id: 5, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/rocky.png"
  },
  {
      id: 17,
      pet_name: 'Bella',
      pet_breed: 'Russian Blue',
      pet_type: 'Cat',
      pet_gender: 'Female',
      pet_age_range: 'Adult',
      description: 'Bella is a graceful and elegant Russian Blue cat.',
      location: "52 E Beverly Pky Valley Stream, New York(NY), 11580", // Replace with the actual location ID from the agencies table
      agency_id: 3, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/bella.png"
  },
  {
      id: 18,
      pet_name: 'Maximus',
      pet_breed: 'Rottweiler',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Maximus is a strong and protective Rottweiler.',
      location: "7171 Sherman Lane Belvidere Center, VT 05442", // Replace with the actual location ID from the agencies table
      agency_id: 4, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/maximus.png"
  },
  {
      id: 19,
      pet_name: 'Lola',
      pet_breed: 'Chartreux',
      pet_type: 'Cat',
      pet_gender: 'Female',
      pet_age_range: 'Adult',
      description: 'Lola is a vocal and affectionate Chartreux cat.',
      location: "52 E Beverly Pky Valley Stream, New York(NY), 11580", // Replace with the actual location ID from the agencies table
      agency_id: 3, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/lola.png"
  },
  {
      id: 20,
      pet_name: 'Xolo',
      pet_breed: 'Xoloitzcuintli',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Puppy',
      description: 'Xolo is an adorable and curious puppy.',
      location: "7171 Sherman Lane Belvidere Center, VT 05442", // Replace with the actual location ID from the agencies table
      agency_id: 4, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/xolo.png"
  },
  {
      id: 21,
      pet_name: 'Mia',
      pet_breed: 'Bengal',
      pet_type: 'Cat',
      pet_gender: 'Female',
      pet_age_range: 'Adult',
      description: 'Mia is a playful and exotic Bengal cat.',
      location: "11 Upper Cibolo Creek Rd, Boerne, TX 78006, USA", // Replace with the actual location ID from the agencies table
      agency_id: 1, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/mia.png"
  },
  {
      id: 22,
      pet_name: 'Cooper',
      pet_breed: 'Doberman',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Senior',
      description: 'Cooper is a loyal and sweet senior dob.',
      location: "77 Rosewood Rd. Orlando, FL 32811", // Replace with the actual location ID from the agencies table
      agency_id: 5, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/cooper.png"
  },
  {
      id: 23,
      pet_name: 'Lily',
      pet_breed: 'Ragdoll',
      pet_type: 'Cat',
      pet_gender: 'Female',
      pet_age_range: 'Senior',
      description: 'Lily is a gentle and sleepy cat.',
      location: "3900 MAGNOLIA ST DENVER CO 80207-1442", // Replace with the actual location ID from the agencies table
      agency_id: 2, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/lily.png"
  },
  {
      id: 24,
      pet_name: 'Charlie',
      pet_breed: 'Corgi',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Charlie is an adorable and playful Corgi.',
      location: "7171 Sherman Lane Belvidere Center, VT 05442", // Replace with the actual location ID from the agencies table
      agency_id: 4, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/charlie.png"
  },
  {
      id: 25,
      pet_name: 'Sophie',
      pet_breed: 'Ocicat',
      pet_type: 'Cat',
      pet_gender: 'Female',
      pet_age_range: 'Adult',
      description: 'Sophie is a graceful and majestic cat.',
      location: "52 E Beverly Pky Valley Stream, New York(NY), 11580", // Replace with the actual location ID from the agencies table
      agency_id: 3, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/sophie.png"
  },
  {
      id: 26,
      pet_name: 'Bailey',
      pet_breed: 'Husky',
      pet_type: 'Dog',
      pet_gender: 'Male',
      pet_age_range: 'Adult',
      description: 'Bailey is a friendly and active Husky.',
      location: "77 Rosewood Rd. Orlando, FL 32811", // Replace with the actual location ID from the agencies table
      agency_id: 5, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/bailey.png"
  },
  {
      id: 27,
      pet_name: 'Gus',
      pet_breed: 'Scottish Fold',
      pet_type: 'Cat',
      pet_gender: 'Male',
      pet_age_range: 'Puppy',
      description: 'Gus is an adorable and curious Scottish Fold cat.',
      location: "11 Upper Cibolo Creek Rd, Boerne, TX 78006, USA", // Replace with the actual location ID from the agencies table
      agency_id: 1, // Replace with the actual agency ID from the agencies table
      pet_photo: "images/gus.png"
  },    
];

const seedPets = () => Pet.bulkCreate(petData);
module.exports = seedPets;
