const router = require("express").Router();
const { Agency, Pet, User, FavoritePet } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Fetch data from the models
    const locationData = await Agency.findAll({
      attributes: ["location"],
      group: ["location"],
    });
    const typeData = await Pet.findAll({
      attributes: ["pet_type"],
      group: ["pet_type"],
    });
    const breedsData = await Pet.findAll({
      attributes: ["pet_breed"],
      group: ["pet_breed"],
    });
    const gendersData = await Pet.findAll({
      attributes: ["pet_gender"],
      group: ["pet_gender"],
    });
    const ageRangesData = await Pet.findAll({
      attributes: ["pet_age_range"],
      group: ["pet_age_range"],
    });
    const agenciesData = await Agency.findAll({
      attributes: ["name"],
      group: ["name"],
    });

    // Serialize data to be used by handlebars
    const cities = locationData.map((agency) => agency.location);
    const types = typeData.map((pet) => pet.pet_type);
    const breeds = breedsData.map((breed) => breed.pet_breed);
    const genders = gendersData.map((gender) => gender.pet_gender);
    const ageRanges = ageRangesData.map((ageRange) => ageRange.pet_age_range);
    const agencies = agenciesData.map((agency) => agency.name);

    // Render the homepage template and pass the data
    res.render("homepage", {
      cities,
      types,
      breeds,
      genders,
      ageRanges,
      agencies,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

router.get("/aboutus", async (req, res) => {
  res.render("aboutus");
});

router.get("/adoption", async (req, res) => {
  res.render("adoption_process");
});

router.get("/adoption_form", async (req, res) => {
  res.render("adoption_form");
});

router.get("/literature", async (req, res) => {
  res.render("pet_literature");
});

router.get("/ally", async (req, res) => {
  res.render("become_ally");
});

router.get("/submitpet", async (req, res) => {
  res.render("submit_pet");
});

router.get("/thankyou", async (req, res) => {
  res.render("thankyou");
});


// router.post("/query_results", async (req, res) => {
//   console.log(req.body);
//   console.log("maluma");
// });
//------------------------------------------------------------------------------------------------------------------------------------------------------//

router.get("/query_results", async (req, res) => {
  console.log("los query", req.query);
  try {
    const { city, pet_type, pet_breed, pet_gender, pet_age_range, agency_id } =
      req.query;

    const results = await Pet.findAll({
      include: {
        model: Agency,
        where: { location: city },
      },

      where: {
        ...(pet_type && { pet_type }),
        ...(pet_breed && { pet_breed }),
        ...(pet_gender && { pet_gender }),
        ...(pet_age_range && { pet_age_range }),
        ...(agency_id && { agency_id }),
      },
    });
    // Results retun an ARRAY of Pet objects, so we just need to grab the property called dataValues from within each one
    const pets = results.map((r) => {
      r.dataValues.agency = r.dataValues.agency.dataValues;

      return r.dataValues;
    });

    res.render("query_results", { pets });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{model: Pet, through: FavoritePet}]
    });

    // Check if user data exists
    if (!userData) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Serialize data to be used by handlebars
    const user = userData.get({ plain: true });
    console.log(user);

    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
