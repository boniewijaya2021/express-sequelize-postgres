const sequelize = require("./config/database");

//const Berita = require("./models/berita");
const User = require("./models/user");
//const Komentar = require("./models/komentar");
//const Likedislike = require("./models/likedislike");
//const Kategori = require("./models/kategori");
//const Gambar = require("./models/gambar");
//const banner = require("./models/banner")
//const logo = require("./models/logo")

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
sequelize.sync({force: true}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

