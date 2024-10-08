const Caneta = require("../models/caneta_model.js");

const store = async (req, res) => {
  try {
    await Caneta.create(req.body);
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = Caneta.find().exec();
    res.json(content);
  } catch (error) {
    resp.json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = Caneta.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    resp.json(error);
  }
};

const update = async (req, res) => {
  try {
    await Caneta.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

const destroy = async (req, res) => {
  try {
    await Caneta.findByIdAndDelete(req.params.id).exec();
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
