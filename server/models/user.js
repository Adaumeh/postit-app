
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirmpassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
       associate: (models) => {
         user.hasMany(models.message, {
          foreignKey: 'id',
          as: 'userid',
          onDelete: 'CASCADE',
        });
       },
    },
  });
  return user;
};