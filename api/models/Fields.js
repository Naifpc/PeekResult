module.exports = (sequelize, DataTypes) => {

    const Fields = sequelize.define('Fields',{

        fieldName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    });

    Fields.associate = (models) => {
        Fields.belongsToMany(models.Trainer, {
            through: 'TrainerFields',
            onDelete: 'cascade',
        });
    };
    return Fields;
};