module.exports = (sequelize, DataTypes) => {

    const Trainer = sequelize.define('Trainer',{

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
        experience:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT('tiny'), // TINYTEXT 255 chars
            allowNull: false,
        },
        imagePath:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    Trainer.associate = (models) => {
        Trainer.belongsToMany(models.Fields, {
            through: 'TrainerFields',
            onDelete: 'cascade',
        });
    }
    
    return Trainer;
};