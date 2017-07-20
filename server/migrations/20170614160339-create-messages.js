module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      group: {
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
    classMethods: {
      associate: (models) => {
        messages.belongsTo(models.group, {
          foreignKey: 'id',
          onDelete: 'CASCADE',
        });
      },
    },
    
    
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('messages'),
};