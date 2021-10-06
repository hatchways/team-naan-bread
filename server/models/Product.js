const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    SKU: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    productImage: {
      url: String,
      publicId: String,
    },
    stock: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
    },
    categories: [
      {
        type: String,
      },
    ],
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model('product', productSchema);