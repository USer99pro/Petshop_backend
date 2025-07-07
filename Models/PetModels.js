const mongoose = require('mongoose');
const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    breed: { type: String, trim: true },
    age: { type: Number, min: 0 },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true },
    isAvailable: { type: Boolean, default: true },
  },
  { versionKey: false }   // 🔑 ปิด __v
);

module.exports = mongoose.model('Pet', petSchema);


