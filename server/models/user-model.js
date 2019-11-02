const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const userSchema = new Schema(
  {
    username: String,
    password: String,
    userFriends: { type: [{ type: Schema.Types.ObjectId, ref: "User" }] },
  },
  {
    timestamps: true
  }
);
=======
const userSchema = new Schema({
  username: String,
  password: String,
  image: String
}, 
{
  timestamps: true
});
>>>>>>> bf5e965715a53c42c6e325e5e460fe4517b947aa

const User = mongoose.model("User", userSchema);
module.exports = User;
