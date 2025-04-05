module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
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
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasOne(models.Trainee, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Users.hasOne(models.Trainer, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Users;
};
