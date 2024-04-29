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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const QuoInvItem = mongoose.model('quoInvItemSchema', quoInvItemSchema);

export default QuoInvItem;
