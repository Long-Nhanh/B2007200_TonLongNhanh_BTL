const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const adminSchema = new Schema(
  {
    name: {
      type: String,
      min: 6,
      max: 50,
      require,
    },
    password: {
      type: String,
      min: 8,
      max: 20,
      require,
    },
    email: {
      type: String,
      min: 6,
      max: 50,
      require,
      unique: true,
    },
    address: [
      {
        type: String,
      },
    ],
    phone: Number,
    role: {
      type: String,
      enum: ['quanly', 'nhanvien'],
      default: 'nhanvien',
      require,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;