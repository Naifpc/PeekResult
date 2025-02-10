module.exports = (sequelize, DataTypes) => {

    const Trianee = sequelize.define('Trianee',{

        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Trianee;
};