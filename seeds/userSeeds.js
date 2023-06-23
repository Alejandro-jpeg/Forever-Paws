const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Austreberto",
    email: "augcha@yahoo.com",
    password: "12345678",
    full_name: "Austreberto Gomez",
    phone: "9564327890",
    street_address: "123 Penny Lane",
    description:
      "I would love a semi active dog that likes to chill but also go to walks with",
    favorite_pet_id: 1,
    
  },
  {
    id: 2,
    username: "Landita",
    email: "landita@hotmail.com",
    password: "12345678",
    full_name: "Mariana Landa",
    phone: "8123479083",
    street_address: "711 E. Saint Anne Ave",
    description: "I would like a black cat as I find them very cute",
    favorite_pet_id: 2,
  },
  {
    id: 3,
    username: "Laia",
    email: "l.ivanna@hotmail.com",
    password: "12345678",
    full_name: "Laia Ivanna",
    phone: "7868955467",
    street_address: "1600 Pennsylvania Avenue",
    description:
      "I would like a big dog as I have a big backyard for it to play",
    favorite_pet_id: "3",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
