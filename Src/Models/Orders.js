const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Orders',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            total: {
              type: DataTypes.FLOAT,
              allowNull: false  
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            orderDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            paymentMethod: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    )

}
