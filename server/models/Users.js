// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", { // we are gonna define table as posts
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade"
        })
    }

    Users.associate = (models) => {
        Users.hasMany(models.Likes, {
            onDelete: "cascade"
        })
        Users.hasMany(models.Posts, {
            onDelete: "cascade"
        })
    }

    return Users //we return all the object of Posts
}