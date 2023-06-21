const seedPets = require('./petsSeeds');
const seedUsers = require('./userSeeds');
const seedAgencies = require('./agenciesSeeds');

const sequelize = require('../config/connection');

const seeding = async () => {
    await sequelize.sync({ force : true });
        console.log('--- DATABASE SYNCED ---');
    await seedPets();
        console.log('--- PETS SEEDED ---');
    await seedUsers();
    console.log('--- USERS SEEDED ---');
    await seedAgencies();
        console.log('--- AGENCIES SEEDED ---');
    process.exit(0);
};

seeding();