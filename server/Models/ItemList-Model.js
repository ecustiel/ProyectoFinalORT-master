const { Schema, model } = require("mongoose");

const itemList = Schema([
  {
    id: {
      type: String,
      require: false,
    },

    nombre: {
      type: String,
      require: true,
    },
    precio: {
      type: String,
      require: true,
    },
    cont: {
      type: Number,
      require: true,
    },
    cantidad: {
      type: String,
      require: true,
    },
  },
]);

module.exports = model("itemList", itemList);
