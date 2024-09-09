const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "ShoppingCart",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            products: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    )

}