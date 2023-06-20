const { Agencies } = require('../models');
const agencyData = [
    {
      "name": "Paw Patrol",
      "email": "pawpat@gmail.com",
      "location": "Texas",
      "webpage": "https://pawpat2023.com"
    },
    {
      "name": "Kittens-n-Kisses",
      "email": "kitkis@hotmail.com",
      "location": "Colorado",
      "webpage": "https://kitkisses.com"
    },
    {
      "name": "Happy Tails",
      "email": "happytails@yahoo.com",
      "location": "New York",
      "webpage": "https://happytailsNY.com"
    },
    {
      "name": "Little Cute Heroes",
      "email": "lch@gmail.com",
      "location": "Vermont",
      "webpage": "https://lch3000.com"
    },
    {
      "name": "Soft fur",
      "email": "softfur@hotmail.com",
      "location": "Florida",
      "webpage": "https://softfur.com"
    }
  ]

const seedAgencies = () => Agencies.bulkkCreate(agencyData);
module.exports = seedAgencies;