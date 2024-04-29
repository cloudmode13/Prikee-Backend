import mongoose from 'mongoose';

const productItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  // productImage: {
  //   type: String,
  // },
  quantity: {
    type: Number,
  },
  category: {
    type: String,
  },
  itemCode: {
    type: String,
  },
  itemDescription: {
    type: String,
  },
  // hsn: {
  //   type: String,
  // },
  unit: {
    type: String,
  },
  openingStock: {
    type: String,
  },
  date: {
    type: String,
  },
  basicSalesPrice: {
    type: String,
  },
  basicPurchasePrice: {
    type: String,
  },
  salesPrice: {
    type: String,
  },
  purchasePrice: {
    type: String,
  },
  hsnCode: {
    type: String,
  },
  salesTax: {
    type: String,
  },
  purchaseTax: {
    type: String,
  },
  salesGst: {
    type: String,
  },
  purchaseGst: {
    type: String,
  },

  imagePath: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Product = mongoose.model('productItemSchema', productItemSchema);

export default Product;
