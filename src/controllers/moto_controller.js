const Moto = require("../models/moto_model.js");

const store = async (req, res) => {
  try {
    await Moto.create(req.body);
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = Moto.find().exec();
    res.json(content);
  } catch (error) {
    resp.json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = Moto.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    resp.json(error);
  }
};

const update = async (req, res) => {
  try {
    await Moto.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    resp.json(error);
  }
};

const destroy = async (req, res) => {
  try {
    await Moto.findByIdAndDelete(req.params.id).exec();
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
