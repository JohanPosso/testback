const ModelUser = require("../models/BtcPrices");

const readData = async (req, res) => {
  try {
    const dataRead = await ModelUser.findAll({ order: [["id", "ASC"]] });
    res.json(dataRead);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { readData };
