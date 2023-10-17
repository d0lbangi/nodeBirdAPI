const { model } = require('mongoose');
const Sequelize = require('sequelize');

class Domain extends Sequelize.Model {
  static initiate(sequelize) {
    Domain.initiate({
      host: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      type: {
        type : Sequelize.ENUM('free', 'premium'),
        allowNull: false,
      },
      clientSecret: {
        type : Sequelize.UUID,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamp: true,
      paranoid: true,
      modelName: 'Domain',
      tableName: 'domains',
    });
  }

  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
};

module.exports = Domain;
