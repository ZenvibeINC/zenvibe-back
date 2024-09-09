import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface ProductAttributes {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    category: number;
    creationDate: Date;
    active: boolean;
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> {}

export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public stock!: number;
    public image!: string;
    public category!: number;
    public creationDate!: Date;
    public active!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

export default (sequelize: Sequelize) => {
    Product.init(
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
                allowNull: false
            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Product'
        }
    );
    return Product;
}