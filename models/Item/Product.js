import mongoose from 'mongoose';

const productItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
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
  customField: [
    {
      hsn: {
        type: String,
      },
    },
  ],
  stockDetails: [
    {
      unit: {
        type: String,
      },
      openingStock: {
        type: String,
      },
      date: {
        type: String,
      },
    },
  ],
  pricingDetails: [
    {
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
      gst: {
        type: String,
      },
    },
  ],
});

const Product = mongoose.model('productItemSchema', productItemSchema);

export default Product;
