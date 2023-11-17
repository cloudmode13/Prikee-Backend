import mongoose from 'mongoose';

const quoInvItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },

  itemCode: {
    type: String,
  },
  salesPrice: {
    type: String,
  },

  salesGst: {
    type: String,
  },
});

const QuoInvItem = mongoose.model('quoInvItemSchema', quoInvItemSchema);

export default QuoInvItem;
