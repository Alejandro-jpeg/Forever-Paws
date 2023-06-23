const { Agency } = require("../models");
const agencyData = [
  {
    name: "Paw Patrol",
    location: "Texas",
  },
  {
    name: "Kittens-n-Kisses",
    location: "Colorado",
  },
  {
    name: "Happy Tails",
    location: "New York",
  },
  {
    name: "Little Cute Heroes",
    location: "Vermont",
  },
  {
    name: "Soft fur",
    location: "Florida",
  },
];

const seedAgencies = () => Agency.bulkCreate(agencyData);
module.exports = seedAgencies;
