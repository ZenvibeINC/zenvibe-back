import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
interface ShoppingCartAttributes {
    id: number
    userId: number
    status: boolean
    products: string[]
    amount: number
}

export interface ShoppingCartInput extends Optional<ShoppingCartAttributes, 'id'> {}
export interface ShoppingCartOutput extends Required<ShoppingCartAttributes> {}

export class ShoppingCart extends Model<ShoppingCartAttributes, ShoppingCartInput> implements ShoppingCartAttributes {
    public id!: number
    public userId!: number
    public status!: boolean
    public products!: string[]
    public amount!: number
}

export default (sequelize: Sequelize) => {
    ShoppingCart.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            products: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'ShoppingCart'
        }
    );
    return ShoppingCart;
}