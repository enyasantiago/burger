const orm = require("../config/orm");

module.exports = {
  selectAll(cb) {
    orm.selectAll("burgers", cb);
  },
  // insertOne(name, cb) {
  //   orm.insertOne("burgers", ["burger_name", "devoured"], [name, 0], cb);
  // },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne(id, obj) {
    const condition = "id = " + id;
    orm.updateOne("burgers", obj, condition, cb);
  },
};

