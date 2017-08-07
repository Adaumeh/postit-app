
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
        unique:true,
        msg: "name must be unique"
      },
      phone: {
        type: Sequelize.BIGINT
      },
       email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [6, 128],
                    msg: "Email address must be between 6 and 128 characters in length"
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
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