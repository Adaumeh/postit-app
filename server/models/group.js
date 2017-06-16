
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin:{
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    members: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
    },
  });
  return group;
};