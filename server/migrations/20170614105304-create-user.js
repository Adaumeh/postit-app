
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique:true
      },
      phone: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING,
        isEmail:true
      },
      password: {
        type: Sequelize.CHAR,
        unique:false
      },

      confirmpassword: {
        type: Sequelize.CHAR,
      },
      userid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      }),
    
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('users'),
};