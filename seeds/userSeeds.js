const { User } = require("../models");

const userData = [
  {
    id: 1,
    full_name: "Austreberto Gomez",
    phone: "9564327890",
    email_address: "augcha@yahoo.com",
    street_address: "123 Penny Lane",
    description:
      "I would love a semi active dog that likes to chill but also go to walks with",
    favorite_pet_id: 1,
    password: "^&$RGSDGN@$!",
  },
  {
    id: 2,
    full_name: "Mariana Landa",
    phone: "8123479083",
    email_address: "landita@hotmail.com",
    street_address: "711 E. Saint Anne Ave",
    description: "I would like a black cat as I find them very cute",
    favorite_pet_id: 2,
    password: "^&$RGSDGN@$!",
  },
  {
    id: 3,
    full_name: "Laia Ivanna",
    phone: "7868955467",
    email_address: "l.ivanna@hotmail.com",
    street_address: "1600 Pennsylvania Avenue",
    description:
      "I would like a big dog as I have a big backyard for it to play",
    favorite_pet_id: "3",
    password: "^&$RGSDGN@$!",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
