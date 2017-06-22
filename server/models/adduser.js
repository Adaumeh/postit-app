
module.exports = (sequelize, DataTypes) => {
  const adduser = sequelize.define('adduser', {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
     },
  }, {
    classMethods: {
    },
  });
  return adduser;
};