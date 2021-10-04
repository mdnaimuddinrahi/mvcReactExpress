// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", { // we are gonna define table as posts
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    }

    Posts.associate = (models) => {
        Posts.hasMany(models.Likes, {
            onDelete: "cascade"
        })
    }

    return Posts //we return all the object of Posts
}