module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.STRING
      },
      members: {
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
        group.hasMany(models.messages, {
          foreignKey: 'id',
          onDelete: 'CASCADE',
        });
      },
    },
    
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('groups'),
};