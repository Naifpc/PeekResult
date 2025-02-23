module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users',{

        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight:{
            type: DataTypes.DECIMAL,
            defaultValue: '0',
            allowNull: false,
        },
        height:{
            type: DataTypes.DECIMAL,
            defaultValue: '0',
            allowNull: false,
        },
        birthDate:{
            type: DataTypes.DATEONLY,
            defaultValue: '1990-01-01',
            allowNull: false,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        waistLength:{
            type: DataTypes.DECIMAL,
            defaultValue: '0',
            allowNull: false,
        },
        neckLength:{
            type: DataTypes.DECIMAL,
            defaultValue: '0',
            allowNull: false,
        },
        fatWeight:{
            type: DataTypes.DECIMAL,
            defaultValue: '0',
            allowNull: false,
        },
        muscleWeight:{
            type: DataTypes.DECIMAL,
            defaultValue: '0',
            allowNull: false,
        },
        
    });
    return Users;
};