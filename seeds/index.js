const seedPets = require("./petsSeeds");
const seedUsers = require("./userSeeds");
const seedAgencies = require("./agenciesSeeds");

const sequelize = require("../config/connection");

const seeding = async () => {
  await sequelize.sync({ force: true });
  console.log("--- DATABASE SYNCED ---");
  await seedAgencies();
  console.log("--- AGENCIES SEEDED ---");
  await seedPets();
  console.log("--- PETS SEEDED ---");
  await seedUsers();
  console.log("--- USERS SEEDED ---");
  process.exit(0);
};

seeding();
