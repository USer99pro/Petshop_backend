const mongoose = require('mongoose');
const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    breed: { type: String, trim: true },
    age: { type: Number},
    price: { type: Number},
    description: { type: String, trim: true },
    isAvailable: { type: Boolean, default: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Pet', petSchema);
