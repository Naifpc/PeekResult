module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define("Trainer", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
      onDelete: "cascade",
    });

    Trainer.hasMany(models.Plans, {
      onDelete: "cascade",
    });
  };

  return Trainer;
};
