const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        type: sequelize.Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    name:Sequelize.STRING,
    email:sequelize.Sequelize.STRING
});

module.exports = User;