module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define("Plans", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Plans.associate = (models) => {
    Plans.hasMany(models.Days, {
      onDelete: "cascade",
    });

    Plans.belongsTo(models.Trainer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Plans;
};
