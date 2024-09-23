import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    admin: boolean;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    declare address: string;
    declare admin: boolean;
}

export default (sequelize: Sequelize) => {
    User.init(
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
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            sequelize
        }
    );
}