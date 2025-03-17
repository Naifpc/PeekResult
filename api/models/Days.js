module.exports = (sequelize, DataTypes) => {
  const Days = sequelize.define("Days", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Days.associate = (models) => {
    Days.belongsTo(models.Plans, {
      foreignKey: {
        allowNull: false,
      },
    });

    Days.hasMany(models.Exercises, {
      onDelete: "cascade",
    });
  };

  return Days;
};
