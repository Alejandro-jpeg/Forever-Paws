// import models
const Agencies = require('./Agencies');
const Pets = require('./Pet');
const User = require('./User');

// Products belongsTo Category
Pets.belongsTo(Agencies, {
  foreignKey: 'agency',
});

// Categories have many Products
User.hasMany(Pets, {
  foreignKey: 'favorite_pet_id',
});

// Products belongToMany Tags (through ProductTag)
Pets.belongsto(Agencies, {
  foreignKey: 'location',
});



module.exports = {
  Pets,
  User,
  Agencies,
};
