// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes")
    return Likes //we return all the object of Posts
}