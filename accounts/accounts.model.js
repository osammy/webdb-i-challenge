const db = require("../data/dbConfig");

exports.find = async function(query) {
  console.log(query);
  const { sortby, sortdir, limit } = query;
  try {
    if (sortby && sortdir && limit)
      return db("accounts")
        .orderBy(sortby, sortdir)
        .limit(limit);
    //   return db("accounts").where(query);
    return db("accounts");
  } catch (e) {
    return Promise.reject(e.message);
  }
};

exports.findById = async function(id) {
  try {
    return db("accounts").where({ id });
  } catch (e) {
    return Promise.reject(e.message);
  }
};

exports.update = async function(id, body) {
  try {
    return db("accounts")
      .update(body)
      .where({ id });
  } catch (e) {
    return Promise.reject(e.message);
  }
};

exports.delete = async function(id) {
  try {
    return db("accounts")
      .where({ id })
      .del();
  } catch (e) {
    return Promise.reject(e.message);
  }
};

exports.create = async function(body) {
  try {
    return db("accounts").insert(body);
  } catch (e) {
    return Promise.reject(e.message);
  }
};
