const orm = require("../config/orm");

module.exports = {
  selectAll(cb) {
    orm.selectAll("burgers", cb);
  },
  insertOne: function (cols, vals, cb) {
    console.log (cols, vals)
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne(id, obj) {
    const condition = "id = " + id;
    orm.updateOne("burgers", obj, condition, cb);
  },
  delete: function(filters, cb){
    orm.delete("burgers", filters, res => cb(res));
  }
};

