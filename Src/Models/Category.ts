import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface CategoryAttributes {
    id: number;
    name: string;
    description: string;
    active: boolean;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export default (sequelize: Sequelize) => {
    class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
        id!: number;
        name!: string;
        description!: string;
        active!: boolean;

        static associate(models: any) {
            // define association here
        }
    }

    Category.init(
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
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Category'
        }
    );
    return Category;
}