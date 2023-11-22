const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require,
    },
    price: {
      type: String,
      require,
    },
    sale: {
      type: Number,
    },
    quantity: {
      type: Number,
      require,
    },
    describe: {
      type: String,
    },
    images: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Image',
        require,
      },
    ],
    status: {
      type: String,
      enum: ['available', 'unavailable'],
      default: 'available',
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;