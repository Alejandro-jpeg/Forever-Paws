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
    name: "Soft fur",
    location: "Florida",
  },
  {
    name: "Little Cute Heroes",
    location: "Vermont",
  },
];

const seedAgencies = () => Agency.bulkCreate(agencyData);
module.exports = seedAgencies;
