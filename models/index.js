// import models
const Agency = require("./Agency");
const Pet = require("./Pet");
const User = require("./User");

// Pets belong to Agency
Agency.hasMany(Pet);
Pet.belongsTo(Agency);

// Categories have many Products
User.hasMany(Pet, {
  foreignKey: "favorite_pet_id",
});

// // Products belongToMany Tags (through ProductTag)
// Pet.belongsto(Agency, {
//   foreignKey: 'location',
// });

module.exports = {
  Pet,
  User,
  Agency,
};
