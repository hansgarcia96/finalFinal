const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportationSchema = new Schema({
  vehicleType: {
    type: String
  },
  model: {
    type: String
  },
  year: {
    type: Number
  },
  images: {
    type: [String]
  },
  seats: {
    type: Number
  }
  // tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  // owner will be added later on
});

const Transportation = mongoose.model("Transportation", transportationSchema);

module.exports = Transportation;
