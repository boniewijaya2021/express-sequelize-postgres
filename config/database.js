const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize","postgres","xxxxxx",{
dialect:"postgres",
host:"localhost",
});

module.exports =sequelize
