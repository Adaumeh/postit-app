module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('adduser', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
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
    queryInterface.dropTable('adduser'),
};