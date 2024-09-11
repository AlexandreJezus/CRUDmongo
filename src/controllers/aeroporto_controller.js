const Aeroporto = require("../models/aeroporto_model.js");

const store = async (req, res) => {
  try {
    await Aeroporto.create(req.body);
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = Aeroporto.find().exec();
    res.json(content);
  } catch (error) {
    resp.json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = Aeroporto.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    resp.json(error);
  }
};

const update = async (req, res) => {
  try {
    await Aeroporto.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

const destroy = async (req, res) => {
  try {
    await Aeroporto.findByIdAndDelete(req.params.id).exec();
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
