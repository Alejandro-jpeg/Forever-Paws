const { Pets } = require('../models');

//Pet data
const petData = [
    {
        id: 1,
        pet_name: "Dabini",
        pet_breed:"Galgo",
        pet_type:"Dog",
        pet_gender:"Female",
        pet_age_range: "Senior",
        description:"A beautiful companion for evening walks in the abbey, not a more trusty companion will you find in the eastern counties",

        location:"16936 Parsonage Lake Ln Odessa, Florida(FL), 33556 ",
        agency:"Petware Solutions LLC.",
    },
    {
        id: 2,
        pet_name: "Gabagool",
        pet_breed:"Canadian Sphynx",
        pet_type:"Cat",
        pet_gender:"Female",
        pet_age_range:"Kitten",
        description:"A forebodding and menacing presence invades the spaces it inhabits, there is not a most loving and caring creature on this plane of existence other than this little creature ",

        location:"52 E Beverly Pky Valley Stream, New York(NY), 11580",
        agency:"MauMau",
    },
    {
        id: 3,
        pet_name: "Maurice",
        pet_breed:"Cornish Rex",
        pet_type:"Cat",
        pet_gender:"Female",
        pet_age_range:"Adult",
        description:"A playful little trickster, never a dull moment when you have it by your side",

        location:"1716 N Hayford Ave Lansing, Michigan(MI), 48912",
        agency:"Paw Guild",
    },
    
]

const seedPets = () => Pets.bulkkCreate(petData);
module.exports = seedPets;