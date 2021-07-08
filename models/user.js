const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User =sequelize.define("users",{
    
    name:{
        type: Sequelize.STRING,
        
        
    },
    email:{
        type: Sequelize.STRING,
        
    },
    password:{
        type: Sequelize.STRING,
        
    },
    status:{
        type: Sequelize.INTEGER,
        
        
    }
});

module.exports = User;