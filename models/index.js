// import models
const Agency = require("./Agency");
const Pet = require("./Pet");
const User = require("./User");
const FavoritePet = require("./FavoritePet");

// Pets belong to Agency
// Agency.hasMany(Pet);
// Pet.belongsTo(Agency);

Pet.belongsTo(Agency, { foreignKey: "agency_id" });
Agency.hasMany(Pet, { foreignKey: "agency_id" });

// Users have many favorite pets
User.belongsToMany(Pet, {through: FavoritePet, foreignKey: "user_id"});
Pet.belongsToMany(User, {through: FavoritePet, foreignKey: "pet_id"});

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
  FavoritePet
};
