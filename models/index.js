// import models
const Agency = require("./Agency");
const Pet = require("./Pet");
const User = require("./User");

// Pets belong to Agency
Pet.belongsTo(Agency, { foreignKey: "agency_id" });
Agency.hasMany(Pet, { foreignKey: "agency_id" });

// Categories have many Products
User.hasMany(Pet, {
  foreignKey: "favorite_pet_id",
});


module.exports = {
  Pet,
  User,
  Agency,
};
// que cuando se haga el fetch como incluir lo de agency_id para jalar location