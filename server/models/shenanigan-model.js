const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require('./user-model');

const shenaniganSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
      minlength: 2
    },
    date: {
      type: Date
      // required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    transportation: [{ type: Schema.Types.ObjectId, ref: "Transportation" }]
  },

  {
    timestamps: true
  }
);

const Event = mongoose.model("Shenanigan", shenaniganSchema);
module.exports = Event;
