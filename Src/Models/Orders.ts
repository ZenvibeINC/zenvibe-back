import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface OrdersAttributes {
    id: number;
    userId: number;
    status: boolean;
    date: Date;
}

export interface OrdersInput extends Optional<OrdersAttributes, 'id'> {}
export interface OrdersOutput extends Required<OrdersAttributes> {}

class Orders extends Model<OrdersAttributes, OrdersInput> implements OrdersAttributes {
    id!: number;
    userId!: number;
    status!: boolean;
    date!: Date;

    static associate(models: any) {
        // define association here
    }
}

export default (sequelize: Sequelize) => {
    Orders.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.INTEGER,
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
        },
        {
            sequelize,
            modelName: 'Orders'
        }
    );
    return Orders;
}