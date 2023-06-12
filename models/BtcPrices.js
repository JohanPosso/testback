const { DataTypes } = require("sequelize");
const sequelize = require("../database/conexion");

const BtcPrices = sequelize.define(
  "bitcoin_prices",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  { timestamps: false }
);

module.exports = BtcPrices;
