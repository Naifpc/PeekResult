module.exports = (sequelize, DataTypes) => {

    const Trainee = sequelize.define('Trainee',{

        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    });
    return Trainee;
};