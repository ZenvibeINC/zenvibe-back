const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define(
        'PaymentMethod',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            orderId: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            },
            method: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            }   
        }
    )
}