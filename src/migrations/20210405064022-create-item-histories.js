'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('item_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      type: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      createdBy: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedBy: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      DeleteAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DeleteBy: {
        type: Sequelize.STRING
      }
    }).then(() => {
      // Create Unique CompoundIndex
      let sql = `CREATE UNIQUE INDEX historiesCompoundIndex
              ON item_histories
              (item_id,createdBy, updatedBy);
            `;
      return queryInterface.sequelize.query(sql, { raw: true });
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('item_histories');
  }
};