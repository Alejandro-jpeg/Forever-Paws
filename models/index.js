// import models
const Agency = require("./Agency");
const Pet = require("./Pet");
const User = require("./User");
const FavoritePet = require("./FavoritePet");

// Pets belong to Agency
Pet.belongsTo(Agency, { foreignKey: "agency_id" });
Agency.hasMany(Pet, { foreignKey: "agency_id" });

// Users have many favorite pets
User.belongsToMany(Pet, {through: FavoritePet, foreignKey: "user_id"});
Pet.belongsToMany(User, {through: FavoritePet, foreignKey: "pet_id"});

// Categories have many Products
User.hasMany(Pet, {
  foreignKey: "favorite_pet_id",
});


module.exports = {
  Pet,
  User,
  Agency,
  FavoritePet
};
// que cuando se haga el fetch como incluir lo de agency_id para jalar location