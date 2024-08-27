const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            },
            category: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }
    )
}