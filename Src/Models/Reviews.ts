import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface ReviewsAttributes {
    id: number;
    productId: number;
    name: string;
    calification: number;
    review: string;
    date: Date;
}
export interface ReviewsInput extends Optional<ReviewsAttributes, 'id'> {}
export interface ReviewsOutput extends Required<ReviewsAttributes> {}

class Reviews extends Model<ReviewsAttributes, ReviewsInput> implements ReviewsAttributes {
    public id!: number;
    public productId!: number;
    public name!: string;
    public calification!: number;
    public review!: string;
    public date!: Date;
}

export default (sequelize: Sequelize) => {
    Reviews.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
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
        },
        {
            sequelize,
            modelName: 'Reviews'
        }
    );
    return Reviews;
}
