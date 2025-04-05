module.exports = (sequelize, DataTypes) => {
  const Exercises = sequelize.define("Exercises", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sets: {
      type: DataTypes.DECIMAL,
      defaultValue: "0",
      allowNull: false,
    },
    reps: {
      type: DataTypes.DECIMAL,
      defaultValue: "0",
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL,
      defaultValue: "0",
      allowNull: false,
    },
    muscles: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    intensity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Exercises.associate = (models) => {
    Exercises.belongsTo(models.Days, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Exercises;
};
