import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
      default: 0,
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Please provide a product category'],
      enum: {
        values: ['Clothing', 'Accessories', 'Home'],
        message: '{VALUE} is not supported',
      },
    },
    brand: {
      type: String,
      required: [true, 'Please provide a product brand'],
    },
    stock: {
      type: Number,
      required: [true, 'Please provide product stock'],
      default: 0,
    },
    images: {
      type: [String],
      required: [true, 'Please provide at least one product image'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isSale: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);