
module.exports = (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        messages.belongsTo(models.user, {
          foreignKey: 'id',
          as: 'userid',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return messages;
};