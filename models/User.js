const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    email: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("user", userSchema);
