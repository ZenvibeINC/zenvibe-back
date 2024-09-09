import { Sequelize, DataTypes, Model, Optional } from 'sequelize';


interface PaymentMethodAttributes {
    id: number;
    name: string;
    type: string;
    active: boolean;
};

export interface PaymentMethodInput extends Optional<PaymentMethodAttributes, 'id'> {}
export interface PaymentMethodOutput extends Required<PaymentMethodAttributes> {}

class PaymentMethod extends Model<PaymentMethodAttributes, PaymentMethodInput> implements PaymentMethodAttributes {
    public id!: number;
    public name!: string;
    public type!: string;
    public active!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
    PaymentMethod.init(
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
            type: {
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
            modelName: 'PaymentMethod'
        }
    );
    return PaymentMethod;
}
