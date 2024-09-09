const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define(
        'Reviews',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                foreignKey: true,
                allowNull: false
            },
            calification: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            review: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }
    )

}