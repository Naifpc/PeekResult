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
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Days.hasMany(models.Exercises, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Days;
};
