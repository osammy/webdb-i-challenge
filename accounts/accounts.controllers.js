const accountsModel = require("./accounts.model");
exports.createOne = async function(req, res, next) {
  try {
    const created = await accountsModel.create(req.body);
    res.json(created);
  } catch (e) {
    return next({ status: 500, message: "couldnt create" });
  }
};

exports.find = async function(req, res, next) {
  try {
    const accounts = await accountsModel.find(req.query);
    res.json(accounts);
  } catch (e) {
    return next({
      status: 500,
      message: "Couldn't find by the supplied id " + e.message
    });
  }
};

exports.findById = async function(req, res, next) {
  try {
    const accounts = accountsModel.findById(req.params.id);
    res.json(accounts);
  } catch (e) {
    return next({ status: 500, message: "couldnt create" });
  }
};

exports.findByIdAndUpdate = async function(req, res, next) {
  try {
    const accounts = accountsModel.update(req.params.id, req.body);
    res.json(accounts);
  } catch (e) {
    return next({ status: 500, message: "Couldn't update this account" });
  }
};

exports.findByIdAndDelete = async function(req, res, next) {
  try {
    const deleteInfo = accountsModel.delete(req.params.id);
    res.json(deleteInfo);
  } catch (e) {
    return next({ status: 500, message: "Couldn't delete this account "+ e.message });
  }
};
