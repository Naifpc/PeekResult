module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define("Trainer", {
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, // TINYTEXT 255 chars
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Trainer.associate = (models) => {
    Trainer.belongsToMany(models.Fields, {
      through: "TrainerFields",
      onDelete: "CASCADE",
    });

    Trainer.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });

    Trainer.hasMany(models.Plans, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Trainer;
};
