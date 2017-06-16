
module.exports = (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msg_group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TEXT:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    GROUP: {
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